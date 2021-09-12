<template>
  <div>
    <h5>grand-grand-child</h5>
    <p>{{ name }}</p>
    <p>{{ root.name }}</p>
  </div>
</template>

<script>
export default {
  inject: {
    name: {
      from: "foo",
    },
    root: {
      from: "ctx",
    },
  },
};
</script>

<style lang="scss" scoped></style>
