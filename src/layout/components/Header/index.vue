<template>
  <div class="header_main">
    <div class="collapseicon">
      <i @click="toggleMenuCollpase()" :class="state.controls.isCollapse ?
      'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item key="/" :to="{ path: '/' }">首页</el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { watch, reactive } from 'vue';

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const routeListConfig: any = reactive({
      currentRouteList: [],
    });
    function toggleMenuCollpase() {
      store.commit('TOOGLESIDEBAR');
    }

    watch(
      () => route.path,
      () => {
        routeListConfig.currentRouteList = route.matched;
      },
    );

    return {
      toggleMenuCollpase,
      routeListConfig,
      state: store.state,
    };
  },
  components: {
  },
};
</script>
<style lang="less">
.collapseicon .el-breadcrumb__inner a:hover, .collapseicon .el-breadcrumb__inner.is-link:hover{
  color: #4AB7BD;
}
.header_main {
  box-shadow: 1px 1px #eee;
  // padding-top: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
}
.collapseicon {
  font-size: 18px;
  cursor: pointer;
}
// el-icon-s-unfold 折叠后
.collapseicon .el-icon-s-fold, .collapseicon .el-icon-s-unfold {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
}
.router-display {
  font-size: 14px;
  font-weight: bold;
  margin-right: 2px;
}
.el-breadcrumb {
  display: inline-block;
  vertical-align: middle;
}
.link-tag {
  width: 100%;
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}

</style>
