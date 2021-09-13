<template>
  <input :type="type" :value="value" @input="changeHandle" v-bind="$attrs" />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  mounted() {},
  methods: {
    changeHandle(e) {
      this.$emit("input", e.target.value);
      this.$parent.validation();
    },
  },
};
</script>

<style lang="scss" scoped></style>
