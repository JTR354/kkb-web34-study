<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <TableDemo /> -->
    <!-- <Communication /> -->
    <!-- <at-slot></at-slot> -->
    <form-demo></form-demo>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import TableDemo from "./components/TableDemo.vue";
// import Communication from "./components/communication";
// import AtSlot from "./components/at-slot";
import FormDemo from "./components/FormDemo.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // TableDemo,
    // Communication,
    // AtSlot,
    FormDemo,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
