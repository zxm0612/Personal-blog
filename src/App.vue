<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog> -->
    <heard-blog></heard-blog>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import blogHeard from './components/blogHeard.vue'
import detailBlog from './components/detailsBlog.vue'
export default {
  name: 'App',
  components: {
   "add-blog":  addBlog,
   "show-blog": showBlog,
   "heard-blog":  blogHeard
  }
}
</script>

<style lang="less" scope>
body{
  margin: 0 0;
}
</style>
