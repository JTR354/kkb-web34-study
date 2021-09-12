<template>
  <span>
    <slot v-bind:user2="user"></slot>
  </span>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "firstName",
        lastName: "last",
      },
    };
  },
};
</script>
