<template>
  <div>
    <slot-component>
      <template #header>
        <h3>{{ header }}</h3>
      </template>
      <h3>{{ main }}</h3>
      <child></child>
      <template #footer="soltProps">
        <h3>{{ soltProps.foo }}</h3>
      </template>
    </slot-component>
  </div>
</template>

<script>
import SlotComponent from "./slot-component.vue";
import Child from "./child.vue";
export default {
  components: {
    SlotComponent,
    Child,
  },
  data() {
    return {
      header: "this is parent header section",
      main: "this is parent default section",
      footer: "this is parent footer section",
    };
  },
};
</script>

<style lang="scss" scoped></style>
