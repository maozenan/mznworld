<template>
    <div>
    <template  :key="routeIndex" v-for="(routeItem, routeIndex) in item">
    <router-link :to="resolvePath(routeItem.path)">
      <el-menu-item
        :key="routeIndex"
        v-if="routeItem.children!=undefined && routeItem.children.length <= 0"
        :index="resolvePath(routeItem.path)"
      >
        <i :class="routeItem.meta.icon || ''"></i>
        <template #title>{{ routeItem.name }}</template>
      </el-menu-item>
    </router-link>
      <el-submenu
        class="submenu-title"
        :key="routeIndex"
        v-if="routeItem.children!=undefined && routeItem.children.length > 0"
        :index="routeItem.path"
      >
        <template #title>
        <i :class="routeItem.meta.icon || ''"></i>
          <span>{{ routeItem.name }}</span>
        </template>
        <el-menu-item-group>
          <sidebar
            :item="routeItem.children"
            :basePath="basePath.length!=undefined && basePath.length > 0 ?
            basePath + '/' + routeItem.path : routeItem.path"
          ></sidebar>
        </el-menu-item-group>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import path from 'path';
import router from 'vue-router';
// import { useStore } from 'vuex';
// import variables from '@/style/variable.less';

export default {
  name: 'sidebar',
  props: {
    item: Object,
    basePath: String,
  },
  setup(props) {
    function resolvePath(routePath) {
      const hasBasePath = props.basePath ? props.basePath : '';
      return path.resolve(hasBasePath, routePath);
    }
    return {
      resolvePath,
    };
  },
};
</script>
<style lang="less">
#app {
  .el-menu-item{
    display: flex;
    align-items: center;
  }
  .is-active > .el-submenu__title {
    color: #f4f4f5 !important;
  }
  .submenu-title-noDropdown,
  .el-submenu__title,
  .el-menu-item {
    font-weight: bold;
    &:hover {
      background-color: #263445 !important;
    }
  }
  .el-submenu__title i{
    height: 18px;
    color: #ddd !important;
  }
  .el-menu-item i{
    height: 18px;
    color: #ddd !important;
  }
  .el-menu-item.is-active i{
    color: #f4f4f5 !important;
  }
  .is-active > .el-submenu__title {
    color: #f4f4f5 !important;
  }

  & .nest-menu .el-submenu > .el-submenu__title,
  & .el-submenu .el-menu-item {
    min-width: 210px !important;
    background-color: #1f2d3d !important;
    &:hover {
      background-color: #001528 !important;
    }
  }

  a {
  text-decoration: none;
}
  .router-link-active {
  text-decoration: none;
}
}
</style>
