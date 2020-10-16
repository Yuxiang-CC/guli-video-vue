<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- 如果为路由指定不同的key可以强制渲染 -->
      <router-view :key="key" />
      <!-- 如果路由指向的页面是同一个组件，那么路由出口的组件不会被重复渲染 -->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
