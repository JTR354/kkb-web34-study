<template>
  <table>
    k-table
    <colgroup>
      <col />
    </colgroup>
    <slot></slot>
  </table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      user: {
        firstName: "firstName",
        lastName: "last",
      },
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.k-table {
  position: relative;
}
</style>
