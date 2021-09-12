<template>
  <div>
    <props-emit></props-emit>
    <bus></bus>
    <attrs-listeners></attrs-listeners>
    <provide-inject></provide-inject>
  </div>
</template>

<script>
import PropsEmit from "./props-emit";
import Bus from "./bus";
import AttrsListeners from "./attrs-listeners";
import ProvideInject from "./provide-inject";
export default {
  components: {
    PropsEmit,
    Bus,
    AttrsListeners,
    ProvideInject,
  },
};
</script>
