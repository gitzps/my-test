<template>
  <div class="d-flex flex-column w-100 h-100">
    <div class="d-flex flex-row w-100 header">
      <div
        class="d-flex justify-content-center left align-items-center"
        :class="{ collapse: isCollapse }"
      >
        ZPS
      </div>
      <div class="middle d-flex align-items-center justify-content-start">
        <i
          class="is-white font-size-22 cursor"
          :class="{
            'el-icon-s-fold': !isCollapse,
            'el-icon-s-unfold': isCollapse
          }"
          @click="isOpen"
        ></i>
      </div>
      <div class="right"></div>
    </div>
    <div id="content" class="d-flex flex-row">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
      <router-view />
    </div>
    <div class="content-bottom"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Test extends Vue {
  private isCollapse: Boolean = false
  mounted() {
    let loading = this.$loading({})
    loading.close()
  }
  public isOpen() {
    this.isCollapse = !this.isCollapse
  }
}
</script>

<style lang="less">
.el-menu-vertical-demo {
  transition: all 0.2s;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  transition: all 0.2s;
  width: 200px;
  min-height: 400px;
}

.fixed-height () {
  height: 60px;
  max-height: 60px;
  min-height: 60px;
}

.header-left-fixed-width {
  width: 200px;
}

.header-left-collapse-fixed-width {
  width: 64px !important;
}

.header {
  .fixed-height ();
  background: #0099ff;
  > .left {
    transition: width 0.2s;
    .header-left-fixed-width();
    text-align: center;
    color: #ffffff;
    border-right: 1px solid #e6e6e6;
  }
  > .left.collapse {
    .header-left-collapse-fixed-width();
  }
  > .right {
    .header-left-fixed-width();
  }
}

.content-bottom {
  .fixed-height ();
  background: #b0b0b0;
}

.is-white {
  color: #ffffff;
}

.font-size-22 {
  font-size: 22px;
}
</style>
