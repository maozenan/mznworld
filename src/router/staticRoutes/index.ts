/* eslint-disable import/prefer-default-export */
import Home from '@/views/Home.vue';
import Wrapper from '@/layout/components/Drawer/index.vue';
import Power from '@/views/Power.vue';
import Command from '@/views/Command.vue';
import Picture from '@/views/Picture.vue';
import Setting from '@/views/Setting.vue';
// import Component from '@/views/Component.vue';

export const staticRoutes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    children: [],
    meta: {
      icon: 'el-icon-s-home',
    },
  },
  {
    path: '/doc',
    name: '文件',
    redirect: '/doc/doctxt',
    component: Wrapper,
    meta: {
      icon: 'el-icon-s-order',
    },
    children: [
      {
        path: 'doctxt',
        name: '文档',
        children: [],
        component: Wrapper,
        meta: {
          icon: 'el-icon-s-data',
        },
      },
      {
        path: 'pic',
        name: '照片',
        component: Picture,
        children: [],
        meta: {
          icon: 'el-icon-camera',
        },
      },
      {
        path: 'movies',
        name: '电影',
        children: [],
        component: Wrapper,
        meta: {
          icon: 'el-icon-video-camera-solid',
        },
      },
    ],
  },
  {
    path: '/power',
    name: '功能',
    component: Power,
    children: [],
    meta: {
      icon: 'el-icon-s-release',
    },
  },
  {
    path: '/command',
    name: '管理',
    component: Command,
    children: [],
    meta: {
      icon: 'el-icon-s-grid',
    },
  },
  {
    path: '/setting',
    name: '设置',
    component: Setting,
    children: [],
    meta: {
      icon: 'el-icon-setting',
    },
  },
];
