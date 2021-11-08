import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
    activeIndex: {}
  },
  mutations: {
    getMenus(state, menus) {
      // 变更状态
      state.menus = deepClone(menus) as any
    },
    go(state, name) {
      let menus: any = deepClone(state.menus)
      state.activeIndex = menus.find((item: any) => {
        return item.name = name
      })
      console.log('store', state.activeIndex)
    }
  },
  actions: {
  },
  modules: {
  }
})

function deepClone(source: any) {
  const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
  for (let keys in source) { // 遍历目标
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
        (targetObj as any)[keys] = source[keys].constructor === Array ? [] : {};
        (targetObj as any)[keys] = deepClone(source[keys]);
      } else { // 如果不是，就直接赋值
        (targetObj as any)[keys] = source[keys];
      }
    }
  }
  return targetObj;
}