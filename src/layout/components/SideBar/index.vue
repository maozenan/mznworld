<template>
<el-row class="tac">
  <el-col :span="12">
    <el-menu
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <sidebar :item="routes" basePath=""></sidebar>
    </el-menu>
  </el-col>
</el-row>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import {
  useRoute,
} from 'vue-router';
// import { ref, watch, onMounted } from 'vue';
// import { useDynamicRoutesHook } from '@/composition/useTagViewApi';
import sidebar from './SideBar.vue';

export default {
  props: ['routes'],
  setup() {
    const store = useStore();
    const route = useRoute();

    return {
    };
  },
  components: {
    sidebar,
  },
};
</script>
<style lang="less" scoped>
#app {
  .el-menu-item{
    display: flex;
    align-items: center;
  }
}
</style>
