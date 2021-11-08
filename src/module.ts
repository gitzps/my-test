import Vue from 'vue'
import page1 from '@/views/pageComponent/page1/page1.vue'
import page2 from '@/views/pageComponent/page2/page2.vue'
import page3 from '@/views/pageComponent/page3/page3.vue'
import page4 from '@/views/pageComponent/page4/page4.vue'
import page5 from '@/views/pageComponent/page5/page5.vue'
import store from './store'

let menus = [
    { name: 'page1', path: page1, icon: 'el-icon-zoom-out' },
    {
        name: 'page2', path: page2, icon: 'el-icon-remove-outline',
        children: [
            { name: 'page4', path: page4, icon: 'el-icon-plus' },
            { name: 'page5', path: page5, icon: 'el-icon-plus' },]
    },
    { name: 'page3', path: page3, icon: 'el-icon-plus' },

]

store.commit('getMenus', deepClone(menus))
store.commit('go', (deepClone(menus[0]) as any).name)

menus.forEach((item: any) => {
    if (item.children) {
        item.children.forEach((element: any) => {
            Vue.component(element.name, element.path)
        });

    }
    Vue.component(item.name, item.path)
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