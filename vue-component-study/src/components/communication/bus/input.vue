<template>
  <div>
    <input type="text" v-model="info" @keyup.enter="handleClick" />
    <button @click="handleClick">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
    };
  },
  methods: {
    handleClick() {
      if (this.info.trim()) {
        this.$bus.$emit("todolist", { text: this.info, id: Math.random() });
        this.info = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
