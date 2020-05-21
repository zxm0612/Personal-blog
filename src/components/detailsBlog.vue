<template>
<div id="detailBlog">
  <h2>{{blog.title}}</h2>
  <article>{{blog.body}}</article>

</div>
</template>

<script>
 
  export default {
    name: "detailBlog",
    data(){
      return{
        blog: {},
        id: this.$route.params.id
      }
    },
    created(){
       this.$Axios.get("http://jsonplaceholder.typicode.com/posts/" + this.id)
       //this.$Axios.get("./posts.json/" + this.id)  // 本地请求json数据
       .then((data)=>{
         console.log(data)
         this.blog = data.data
       })
    }
}
</script>

<style lang="less" scoped>
#detailBlog {
    margin: 0 auto;
    width: 1200px;
    padding: 20px 20px;
    border: 1px solid #eee;
    background: #eee;
    text-align: justify;
    text-justify: inter-word;
    
    h2{
      color: #666666;
      text-align: center;
    }
  }
</style>