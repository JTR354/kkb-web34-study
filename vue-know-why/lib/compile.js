/**
 * 解析模板, 并且把响应式对象的数据绑定上去
 */

import Watcher from "./Watcher.js"

export class Compile {
  constructor(vm) {
    this.$vm = vm
    this.$options = vm.$options
    this.run()
  }
  // 遍历dom树, 解析语法, 替换
  run() {
    const el = document.querySelector(this.$options.el)
    const stack = [el]
    while (stack.length) {
      const node = stack.pop()
      this.analysis(node)
      for (const child of node?.childNodes) {
        stack.push(child)
      }
    }
  }

  analysis(node) {
    if (!node) return
    switch (node.nodeType) {
      case Node.TEXT_NODE:
        if (this.isMustache(node.textContent)) {
          const key = RegExp.$1?.trim()
          // node.textContent = this.$vm[key]
          this.update('textContent', node, key)
        }
        // js表达式不知道怎么处理
        break
      case Node.ELEMENT_NODE:
        node.getAttributeNames().forEach(name => {
          if (this.isDir(name)) {
            this.update(RegExp.$1, node, node.getAttribute(name))
          }
          if (this.isEvent(name)) {
            this.addEventListener(node, RegExp.$1, node.getAttribute(name))

          }
        })
        break
    }
  }

  isMustache(text) {
    return new RegExp('{{(.*)}}').test(text)
  }
  isDir(attrName) {
    return /v-(.+)/.test(attrName)
  }
  isEvent(attrName) {
    return /@(.+)/.test(attrName)
  }

  update(exp, node, key) {
    const fn = this[exp].bind(this)
    if (typeof fn !== 'function') {
      return
    }
    let value = this.$vm
    key.split('.').forEach(k => {
      value = value[k]
    })
    fn(node, value, key)
    new Watcher(this.$vm, key, function (val) {
      fn(node, val)
    })
  }

  text(node, val) {
    node.innerText = val
  }
  html(node, val) {
    node.innerHTML = val
  }
  model(node, val, key) {
    node.value = val
    // todo
    if (Compile.target.has(node)) return
    Compile.target.add(node)
    console.log(1e9, this)
    const vm = this.$vm
    node.addEventListener('input', (e) => {
      console.log(e.target.value, key)
      vm[key] = e.target.value
    })

  }
  textContent(node, val) {
    node.textContent = val
  }

  addEventListener(node, event, name) {
    const fn = this.$options.methods[name].bind(this.$vm)
    fn && node.addEventListener(event, fn)
  }
}

Compile.target = new WeakSet()
export default Compile