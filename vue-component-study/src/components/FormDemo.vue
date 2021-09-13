<template>
  <div>
    <k-form :model="model" :rules="rules" @submit="handleSubmit">
      <k-form-item label="用户" prop="user" for="user">
        <k-input
          id="user"
          v-model="model.user"
          placeholder="please input user name"
        ></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input
          v-model="model.password"
          type="password"
          placeholder="please input password"
        ></k-input>
      </k-form-item>
      <k-form-item>
        <button>submit</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from "./k-form";
import KFormItem from "./k-form/k-form-item.vue";
import KInput from "./k-form/k-input.vue";
export default {
  components: {
    KForm,
    KFormItem,
    KInput,
  },
  data() {
    return {
      model: {
        user: "d",
        password: "",
      },
      rules: {
        user: [{ required: true, message: "用户名不能为空" }],
        password: [{ required: true, message: "密码不能为空" }],
      },
    };
  },
  methods: {
    handleSubmit(validator) {
      if (validator) {
        this.$notice({
          title: "社会你杨哥喊你来搬砖",
          message: validator.join(""),
          duration: 1000,
        });
      } else {
        console.log("login");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
