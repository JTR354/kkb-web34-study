/**
 * 1. 数据劫持, 在数据变化时更新视图.
 * 2. 遍历整个对象, 使之成为响应式对象(对象嵌套)
 */
import Dep from './Dep.js'

export function defineReactive(obj, key, val) {
  observer(val)
  const dep = new Dep
  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) {
        dep.add(Dep.target)
      }
      return val
    },
    set(newVal) {
      if (val !== newVal) {
        // 修改了 再通知
        val = newVal
        observer(newVal)
        dep.notify()
      }
    }
  })
}

export function observer(data) {
  if (data === null || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach((key) => {
    defineReactive(data, key, data[key])
  })
}

export function set(obj, key, val) {
  defineReactive(obj, key, val)
}

// const data = {
//   message: 'Hello Vue!',
//   text: "it's a text",
//   html: "<span style='color:red;'>i'm a html</span>",
//   info: '',
//   obj: { a: '123' }
// }

// observer(data)
// // defineReactive(data, 'name', 'b')

// function update() {
//   document.body.innerText = new Date().getSeconds()
// }

// data.message = ',m'
// data.text = 't'
// data.obj.a = '55'
// data.obj.b = 'bbb'

// set(data.obj, 'b', 'sada')

// data.obj.b = 'bbbcc'