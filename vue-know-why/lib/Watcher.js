import Dep from './Dep.js'

class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn
    Dep.target = this

    let target = this.vm
    this.key.split('.').forEach(k => {
      Dep.target = this
      target = target[k]
      Dep.target = null
    })
  }
  update() {
    let val = this.vm
    this.key.split('.').forEach(k => {
      val = val[k]
    })
    this.updateFn.call(this.vm, val)
  }
}


export default Watcher