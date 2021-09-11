<template>
  <div class="login"></div>
  <div class="login_form">
       <el-form
  :model="form"
  status-icon
  :rules="rules"
  ref="ruleForm"
  label-width="100px"
  class="demo-ruleForm"
>
  <el-form-item label="账号:">
    <el-input
      type="password"
      v-model="form.account"
      autocomplete="off"
    ></el-input>
  </el-form-item>
  <el-form-item label="密码:">
    <el-input
      type="password"
      v-model="form.pass"
      autocomplete="off"
    ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">提交</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const loginForm = ref(null);
    const form = reactive({
      account: '',
      pass: '',
    });
    const submitForm = () => {
      console.log(form);
      if (form.account !== 'admin' || form.pass !== '123456') {
        ElMessage('账号或密码错误');
        return;
      }
      localStorage.setItem('user', JSON.stringify(form));
      router.push('/');
    };
    return {
      form,
      submitForm,
      loginForm,
    };
  },
});
</script>

<style>
.login {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.login_form {
    background-color: rgb(253, 204, 227);
    position: absolute;
    width: 300px;
    height: 500px;
    top: 100px;
    right: 100px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px #333;
    display:flex;
    justify-content: center;
    align-items: center;
    opacity:0.9;
}
.el-form-item{
    display:contents;
    width: 100%;
    align-items:center;
}
.el-button {
    float: right;
    margin-top: 10px;
}
</style>
