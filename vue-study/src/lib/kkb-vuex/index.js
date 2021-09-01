import Vue from 'vue'
class Store {
    constructor(options) {
        this.$options = options
        this._vm =new Vue({
            data() {
                return {$$state: options.state}
            },
            computed: this.computed
        })
        this.initGetters()
    }
    get state() {
        return this.$options.state
    }
    get computed() {
        const computed = {}
        const options = this.$options
        Object.keys(options.getters).forEach(key => {
            computed[key] = () => {
                return options.getters[key](this.state)
            }
        })
        return computed
    }
    initGetters() {
        this.getters = {}
        const options = this.$options
        Object.keys(options.getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get:() => {
                    return this._vm[key]
                }
            })
        })
    }
    commit = (type, payload) => {
        this.$options.mutations[type](this.state, payload)
    }
    dispatch = (type) => {
       return this.$options.actions[type](this)
    }
}

function install() {
    Vue.mixin({
        beforeCreate() {
            if (!Vue.prototype.$store)  Vue.prototype.$store = this.$options.store
        },
    })
   
}

export default {Store, install}