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
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <template #title :to="{ path: '/' }">首页</template>
      </el-menu-item>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-location"></i>
          <span>文件</span>
        </template>
        <el-menu-item-group>
          <template #title>存储</template>
          <el-menu-item index="1-1" key="/" :to="{ path: '/' }">文档</el-menu-item>
          <el-menu-item index="1-2">照片</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="视频">
          <el-menu-item index="1-3">素材</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <template #title>功能</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <template #title>管理</template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <template #title>设置</template>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import {
  useRouter, useRoute,
} from 'vue-router';
import { ref, watch, onMounted } from 'vue';

import { useDynamicRoutesHook } from '@/composition/useTagViewApi';
// import variables from '@/style/variable.less';

export default {
  props: ['routes'],
  setup() {
    const store = useStore();
    const route = useRoute();
    const { dynamicRouteTags } = useDynamicRoutesHook();

    const currentActiveRoute = ref('');

    // watch(route, (newVal, oldVal) => {
    //   if (newVal.meta.activePath) {
    //     currentActiveRoute.value = newVal.meta.activePath;
    //   } else {
    //     currentActiveRoute.value = newVal.path;
    //   }
    // });

    function menuSelect(index: any) {
      let parentPath = '';
      const parentPathIndex = index.lastIndexOf('/');
      if (parentPathIndex > 0) {
        parentPath = index.slice(0, parentPathIndex);
      }
      dynamicRouteTags(index, parentPath);
    }
    return {
      state: store.state,
      menuSelect,
      currentActiveRoute,
    };
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
