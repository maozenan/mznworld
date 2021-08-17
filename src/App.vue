<template>
  <div>
    <layout></layout>
  </div>
</template>
<script>
import layout from '@/layout/index.vue';

export default {
  setup() {
    return {};
  },
  components: {
    layout,
  },
};
</script>
<style lang="less">
body{
  margin: 0;
}
#app {
  min-width: 1280px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .el-button--primary{
    background: #4AB7BD; // button 主题色保持一致
    border-color: #4AB7BD;
  }
}
</style>
