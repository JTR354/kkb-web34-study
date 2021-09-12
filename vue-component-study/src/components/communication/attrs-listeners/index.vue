<template>
  <wrapper title="attrs-listeners">
    <child :name="name" :age="age" :height="height" @some="handleSome"></child>
  </wrapper>
</template>

<script>
import Wrapper from "../wrapper.vue";
import Child from "./child.vue";
export default {
  components: {
    Wrapper,
    Child,
  },
  data() {
    return {
      name: "jtr",
      age: "3",
      height: "18",
    };
  },
  methods: {
    handleSome(msg) {
      alert(msg);
    },
  },
};
</script>

<style lang="scss" scoped></style>
