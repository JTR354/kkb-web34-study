<template>
  <div id="app" >
    <h2 @click="$store.commit('increment')">store count:{{$store.state.count}}</h2>
    <h2 @click="$store.dispatch('add')">store async count:{{$store.state.count}}</h2>
    <h3>store getters double{{$store.getters.double}}</h3>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  user-select: none;
}
#app img {
  -webkit-user-drag: none;
}
</style>
