<template>
  <th>123</th>
</template>

<script>
export default {
  props: {
    prop: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      // slotProps: "value",
    };
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style lang="scss" scoped>
.k-table-colunm {
  color: red;
}
</style>
