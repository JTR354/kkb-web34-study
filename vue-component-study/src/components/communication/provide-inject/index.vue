<template>
  <wrapper title="provide-inject">
    <input type="text" v-model="name" />
    <child></child>
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
  provide() {
    return { foo: this.name, ctx: this.$data };
  },
  data() {
    return {
      name: "Leo",
    };
  },
};
</script>

<style lang="scss" scoped></style>
