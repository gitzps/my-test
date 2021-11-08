<template>
  <div class="content">
    <component :is="activeIndex.name"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  data() {
    return {
      currentPage: ''
    }
  },
  computed: {
    activeIndex() {
      console.log(this.$store.state.activeIndex, 'content')
      return this.$store.state.activeIndex
    }
  }
})
</script>
