<template>
  <form @submit.prevent="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      require: true,
    },
    rules: Object,
  },
  methods: {
    handleSubmit() {
      const errors = [];
      const validator = this.$children
        .filter((item) => item.prop)
        .map((item) =>
          item.validation((err) => {
            err && errors.push(err);
          })
        );
      Promise.all(validator)
        .then(() => {
          this.$emit("submit");
        })
        .catch(() => {
          this.$emit("submit", errors);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
