/**
 * Build a vue by yourself
 * 
 * 目标: 实现数据驱动, 响应式渲染
 * 实现步骤: 数据劫持, 模板编译, 观察派发
 */

/**
 * 学习方法:
 *  从目的(需要入手)
 */

import { observer, defineReactive } from './lib/proxy.js'
import Compile from './lib/compile.js'

class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    observer(this.$data)
    this.proxy(this)
    new Compile(this)
  }

  proxy(vm) {
    Object.keys(vm.$data).forEach((key) => {
      Object.defineProperty(vm, key, {
        get() {
          return vm.$data[key]
        },
        set(val) {
          vm.$data[key] = val
        }

      })
    })
  }
}

export default Vue