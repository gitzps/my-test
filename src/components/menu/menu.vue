<template>
  <el-menu
    :default-active="activeIndex.name"
    class="el-menu-vertical-demo"
    @select="handleSelect"
  >
    <el-submenu v-for="item of menus" :index="item.name" :key="item.name">
      <el-submenu :index="item.name">
        <el-menu-item
          v-for="sub of item.children"
          :index="sub.name"
          :key="sub.name"
          >{{ sub.name }}</el-menu-item
        >
      </el-submenu>
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
export default Vue.extend({
  computed: mapState(['activeIndex', 'menus']),
  created() {
    console.log(this.activeIndex, this.menus)
  },
  methods: {
    ...mapMutations(['getMenus', 'go']),
    handleSelect(key, keyPath) {
      this.go(key)
    }
  }
})
</script>
