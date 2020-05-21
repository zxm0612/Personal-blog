<template>
  <div class="blogheard">
    <ul>
      <li><router-link to="/" exact>博客预览</router-link></li>
      <li><router-link to="/addBlog" exact>添加博客</router-link></li>
    </ul>
  </div>
</template>

<script>
//import blogcss from '@/../public/lessstyle/blog.less'
export default {
  name:"blogHeard",
  data() {
    return{

    }
  }
}
</script>
<style lang="less" scoped>
@import '../../public/lessstyle/blog.less';
</style>