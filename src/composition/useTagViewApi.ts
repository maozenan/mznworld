/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { staticRoutes } from '@/router/staticRoutes';

const dynamic = reactive({
  dRoutes: [{ path: '/', name: '首页' }],
});

export function useDynamicRoutesHook() {
  const router = useRouter();
  /**
   * @param value String 当前menu对应的路由path
   * @param parentPath string 当前路由中父级路由
   */
  function dynamicRouteTags(value: any, parentPath: any) {
    const hasValue = dynamic.dRoutes.some((item, index) => item.path === value);
    function concatPath(arr: any, value: any, parentPath: any) {
      if (!hasValue) {
        arr.forEach((constItem: any, constIndex: any) => {
          const pathConcat = `${parentPath}/${constItem.path}`;
          if (constItem.path === value || pathConcat === value) {
            dynamic.dRoutes.push({ path: value, name: constItem.name });
          } else if (constItem.children.length > 0) {
            concatPath(constItem.children, value, parentPath);
          }
        });
      }
    }
    concatPath(staticRoutes, value, parentPath);
  }
  /**
   * @param value String 当前删除tag路由
   * @param current Objct 当前激活路由对象
   */
  function deleteDynamicTag(value: any, current: any) {
    new Promise<void>((resolve, reject) => {
      const valueIndex = dynamic.dRoutes.findIndex((item, index) => item.path === value.path);
      dynamic.dRoutes.splice(valueIndex, 1);
      resolve();
    }).then(() => {
      if (current === value.path) { // 如果删除当前激活tag就自动切换到最后一个tag
        const newRoute = dynamic.dRoutes.slice(-1);
        router.push({
          path: newRoute[0].path,
        });
      }
    });
  }
  return {
    dynamic, // 动态路由
    dynamicRouteTags, // tagviews动态生成
    deleteDynamicTag, // 删除tagview
  };
}
