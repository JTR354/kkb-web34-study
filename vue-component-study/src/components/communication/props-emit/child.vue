<template>
  <div @click="$emit('handleClick', $event, info)">Child{{ msg }}</div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      info: `it's from child`,
    };
  },
};
</script>
