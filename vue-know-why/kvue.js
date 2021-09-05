class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    this.observer()
    this.proxy()
    this.compile()
  }

  observer() {
    const stack = [this.$data]
    const $$data = this.$data
    while (stack.length) {
      const obj = stack.pop()
      if (Array.isArray(obj)) {
        proxyArray(obj)
      } else if (isObject(obj)) {
        Object.keys(obj).forEach((key) => {
          defineReactive(obj, key, obj[key])
        })
      }
    }


    function proxyArray(obj) {
      const arrayProto = Object.create(Array.prototype);
      ['push'].forEach(method => {
        arrayProto[method] = function () {
          Array.prototype[method].apply(this, arguments)
          // HARD CODE
          assignValue(obj)
        }
      })
      obj.__proto__ = arrayProto
      obj.forEach((val) => {
        if (isObject(val)) stack.push(val)
      })


      function assignValue(obj) {
        Object.keys($$data).forEach(key => {
          if ($$data[key] === obj) {
            $$data[key] = null
            $$data[key] = obj
          }
        })
      }
    }

    function defineReactive(obj, key, val) {
      if (isObject(val)) stack.push(val)
      const deps = new Dep()
      Object.defineProperty(obj, key, {
        get() {
          // subscription
          Dep.subscriptionWatcher && deps.addDeps(Dep.subscriptionWatcher)
          return val
        },
        set(newVal) {
          if (newVal !== val) {
            if (isObject(newVal)) stack.push(newVal)
            val = newVal
            // notification
            deps.notify()
          }
        }
      })
    }
  }
  proxy() {
    Object.keys(this.$data).forEach(key => {
      Object.defineProperty(this, key, {
        get: () => this.$data[key],
        set: (newVal) => this.$data[key] = newVal
      })
    })
  }
  compile() {
    new Compile(this)
  }
}

function isObject(obj) {
  return obj && typeof obj === 'object'
}

/**
 * 编译器
 */
class Compile {
  constructor(vm) {
    this.$vm = vm
    this.$el = vm.$options.el

    this.init()
  }

  init() {
    const stack = [document.querySelector(this.$el)]

    while (stack.length) {
      const node = stack.pop()
      this.compileNode(node)
      if (node?.childNodes) {
        stack.push(...node.childNodes)
      }
    }
  }

  compileNode(node) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      node.getAttributeNames().forEach(attrName => {
        this.dir(node, attrName)
      })
      return
    }
    if (node.nodeType === Node.TEXT_NODE) {
      this.moustache(node)
      return
    }
  }

  moustache(node) {
    if (new RegExp('{{(.*)}}').test(node.textContent)) {
      const key = RegExp.$1.trim()
      update(at(this.$vm, key))
      this.watch(key, update)
    }
    function update(val) {
      node.textContent = val || node.textContent
    }
  }

  dir(node, attrName) {
    if (attrName.startsWith('v-')) {
      const exp = attrName.substring(2)
      this[exp] && this[exp](node, node.getAttribute(attrName))
      return
    }
    if (attrName.startsWith('@')) {
      const event = attrName.substring(1)
      const key = node.getAttribute(attrName)
      node.addEventListener(event, this.$vm.$options.methods[key].bind(this.$vm))
    }
  }

  text(node, key) {
    update(at(this.$vm, key))
    this.watch(key, update)
    function update(val) {
      node.innerText = val
    }
  }

  html(node, key) {
    update(at(this.$vm, key))
    this.watch(key, update)
    function update(val) {
      node.innerHTML = val
    }
  }

  model(node, key) {
    node.addEventListener('input', e => {
      const val = e.target.value
      this.$vm[key] = val
    })
    update(at(this.$vm, key))
    this.watch(key, update)
    function update(val) {
      node.value = val
    }
  }

  watch(key, update) {
    new Watcher(this.$vm, key, update)
  }
}


function at(val, key) {
  key.split('.').forEach(k => {
    val = val[k]
  })
  return val
}

/**
 * 观察者
 */
class Watcher {
  constructor(vm, key, updater) {
    this.$vm = vm
    this.$key = key
    this.$updater = updater

    Dep.subscriptionWatcher = this
    vm[key]
    Dep.subscriptionWatcher = null
  }
  update() {
    this.$updater.call(this.$vm, at(this.$vm, this.$key))
  }
}

/**
 * 订阅者
 */

class Dep {
  static subscriptionWatcher = null
  constructor() {
    this.deps = []
  }
  addDeps(watch) {
    this.deps.push(watch)
  }
  notify() {
    this.deps.forEach(w => w.update())
  }
}