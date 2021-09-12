<template>
  <div>
    <span>{{ item.text }}</span>
    <button @click="handleDelete">del</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  methods: {
    handleDelete() {
      this.$bus.$emit("todolist", this.item, true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
