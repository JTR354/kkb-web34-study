<template>
  <div>
    <h4>grand-child</h4>
    <grand-grand-child></grand-grand-child>
  </div>
</template>

<script>
import GrandGrandChild from "./grand-grand-child.vue";
export default {
  components: {
    GrandGrandChild,
  },
};
</script>

<style lang="scss" scoped></style>
