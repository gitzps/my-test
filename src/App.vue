<template>
  <div class="d-flex flex-column w-100 h-100">
    <div class="d-flex flex-row w-100 header">
      <div class="d-flex justify-content-center left align-items-center">
        ZPS
      </div>
      <div class="middle d-flex align-items-center justify-content-start"></div>
      <div class="right"></div>
    </div>
    <div id="content" class="d-flex flex-row">
      <rightMenu></rightMenu>
      <mainContent></mainContent>
    </div>
    <div class="content-bottom"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import rightMenu from '@/components/menu/menu.vue'
import mainContent from '@/components/content/content.vue'
@Component({
  components: { rightMenu, mainContent }
})
export default class Test extends Vue {
  mounted() {
    let loading = this.$loading({})
    loading.close()
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
