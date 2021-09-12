<template>
  <div>
    <h1>{{ title }}</h1>
    <slot></slot>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
