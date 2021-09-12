<template>
  <Wrapper title="props-emit">
    <h3>Parent</h3>
    <child
      :msg="msg"
      @click.native="handleClick"
      @handleClick="handleClick"
    ></child>
  </Wrapper>
</template>

<script>
import Wrapper from "../wrapper.vue";
import Child from "./child.vue";
export default {
  components: {
    Child,
    Wrapper,
  },
  data() {
    return {
      msg: "the msg is from parent",
    };
  },
  methods: {
    handleClick(e, info) {
      alert(info);
    },
  },
};
</script>
