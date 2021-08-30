<template>
 <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="甲方公司名称:">
    <el-input v-model="form.party_name"></el-input>
  </el-form-item>
  <el-form-item label="安装地址:">
    <el-input v-model="form.adress"></el-input>
  </el-form-item>
  <el-form-item label="甲方公司法人:">
    <el-input v-model="form.boss"></el-input>
  </el-form-item>
  <el-form-item label="宽带速率:">
    <el-input v-model="form.rate"></el-input>
  </el-form-item>
  <el-form-item label="一次性费用:">
    <el-input v-model="form.price_once"></el-input>
  </el-form-item>
  <el-form-item label="年使用费:">
    <el-input v-model="form.price_year"></el-input>
  </el-form-item>
  <el-form-item label="开户行:">
    <el-input v-model="form.bank"></el-input>
  </el-form-item>
  <el-form-item label="银行账号:">
    <el-input v-model="form.banknumber"></el-input>
  </el-form-item>
  <el-form-item label="社会信用代码:">
    <el-input v-model="form.number"></el-input>
  </el-form-item>
  <el-form-item label="公司地址:">
    <el-input v-model="form.adress_party"></el-input>
  </el-form-item>
  <el-form-item label="联系人名字:">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="联系人电话:">
    <el-input v-model="form.phone"></el-input>
  </el-form-item>
       <input class="button" type="submit" value="提交" @click.prevent="getContarct">
 </el-form>
</template>

<script>
import {
  defineComponent, reactive,
} from 'vue';
// import { useRouter } from 'vue-router';
import axios from 'axios';
import download from 'downloadjs';

export default defineComponent({
  setup() {
    const form = reactive({
      party_name: '',
      adress: '',
      boss: '',
      rate: '',
      price_once: '',
      price_year: '',
      bank: '',
      banknumber: '',
      number: '',
      adress_party: '',
      name: '',
      phone: '',
    });
    const getContarct = () => {
      console.log(form);
      axios({
        headers: {
          Accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        responseType: 'blob',
        method: 'POST',
        url: '/api/api/Contract',
        data: JSON.stringify(form),
      }).then((res) => {
        if (res.status === 200) {
          const blob = new Blob([res.data], {
            type: res.headers['content-type'],
          });
          const fileName = `${form.party_name}互联网专线合同.docx`;
          download(blob, fileName);
        }
      });
    };
    return {
      form,
      getContarct,
    };
  },
});
</script>

<style>
.el-form-item{
    float: left;
    width: 50%;
}
.el-form-item > label {
    font: bold;
}
.el-button{
    float: right;
}
</style>
