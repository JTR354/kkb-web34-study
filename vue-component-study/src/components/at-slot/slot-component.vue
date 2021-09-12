<template>
  <div>
    <slot name="header"></slot>
    <hr />
    <slot foo="th"></slot>
    <hr />
    <slot name="footer" foo="foo"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
