<template>
  <div>
    <ul>
      <li
        v-for="item in this.$attrs"
        :key="item"
        @click.stop="handleClick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  mounted() {},
  methods: {
    handleClick(item) {
      this.$emit("some", `this is from grand child msg ===> ${item}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
