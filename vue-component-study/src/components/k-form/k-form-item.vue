<template>
  <div>
    <label v-if="label" v-bind="$attrs" class="text">{{ label }}</label>
    <slot></slot>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  inheritAttrs: false,
  props: {
    label: String,
    prop: String,
  },
  data() {
    return {
      error: "",
    };
  },
  methods: {
    validation(cb) {
      const { prop, form } = this;
      const rules = form.rules[prop];
      const value = form.model[prop];
      const descriptor = { [prop]: rules };
      const validator = new Schema(descriptor);
      return validator.validate({ [prop]: value }, (errors) => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
        cb && cb(this.error);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  margin-right: 10px;
}
</style>
