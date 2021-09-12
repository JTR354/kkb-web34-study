<template>
  <warpper title="event bus">
    <vue-input ref="refChild"></vue-input>
    <ul>
      <li v-for="item in list" :key="item.id">
        <list-item :item="item" />
      </li>
    </ul>
  </warpper>
</template>

<script>
import Warpper from "../wrapper.vue";
import VueInput from "./input.vue";
import ListItem from "./list-item.vue";

export default {
  components: {
    Warpper,
    VueInput,
    ListItem,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    // console.log(this.$parent);
    // console.log(this.$root);
    // console.log(this.$children);
    // console.log(this.$refs.refChild);
    this.$bus.$on("todolist", (info, isDel) => {
      if (isDel) {
        this.list = this.list.filter(({ id }) => id !== info.id);
        return;
      }
      this.list.push(info);
    });
  },
};
</script>

<style lang="scss" scoped></style>
