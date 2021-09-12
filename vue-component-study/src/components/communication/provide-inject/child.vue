<template>
  <div>
    <h3>child</h3>
    <grand-child></grand-child>
  </div>
</template>

<script>
import GrandChild from "./grand-child.vue";
export default {
  components: {
    GrandChild,
  },
};
</script>

<style lang="scss" scoped></style>
