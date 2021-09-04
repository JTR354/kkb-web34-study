class Dep {
  constructor() {
    this.deps = []
  }
  add(watcher) {
    this.deps.push(watcher)
  }
  notify() {
    this.deps.forEach(w => w.update())
  }
}

export default Dep