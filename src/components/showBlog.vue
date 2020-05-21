<template>
  <div v-panels:bg = "'wide'" id="show-blog">
    <h2>博客总览</h2>
    <input v-model="search" type="text" placeholder ="搜索">
    <div id="single-blog" v-for="(blogObj,index) in filteredSearch" :key="index">
      <router-link :to="'/detailBlog/' + blogObj.id">
          <h3 v-rainbow>{{blogObj.title | toUpperCase}}</h3>
      </router-link>
      <article>{{blogObj.body | intercept}}</article>
    </div>
  </div>
</template>

<script>
export default {
    name: 'show-blog',
    data(){
        return {
            blogArray:[],
            search:''
        }
    },
    created(){
        getdata:{
          //this.$Axios.get("http://jsonplaceholder.typicode.com/posts") // 远程请求json数据
            this.$Axios.get("./posts.json")  // 本地请求json数据
            .then(data=>{
                //  console.log(data);
                this.blogArray = data.data.slice(0,10);
                console.log(this.blogArray);
            })
        }   
    },
    computed: {
        filteredSearch:function(){  //  搜过过滤
            return this.blogArray.filter((blog) =>{
                return blog.title.match(this.search)
          })
      }
    },
    filters:{    
        toUpperCase(value) {
            return value.toUpperCase(); //  把标题变成大写
        },
        intercept(value) {
            return value.slice(0,120) + "……";   //  截取内容长度
        }
  },
    directives:{
        'rainbow':{
            bind(el,binding,vnode){
                el.style.color = '#' + Math.random().toString(16).slice(2,8);   //  让标题随机变成彩虹色
            }
        },
        panels:{
            bind(el,binding,vnode){     //  自定义指令改变盒子的样式，令视图改变
                if(binding.value == 'wide'){
                    el.style.maxWidth = "1200px"
                }else if(binding.value == 'narrow'){
                    el.style.maxWidth = "760px"
                }
                if(binding.arg == "bg"){
                    el.style.background ="#3a9a00";
                    el.style.padding = "20px"
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
#show-blog{
    max-width: 1200px;
    margin: 0 auto ;
}
#single-blog{
    padding: 20px 20px;
    margin-top: 20px;
    box-sizing: border-box;
    background: #eeeeee;
}
a{
    text-decoration:none;
}
input[type='text']{
    width: 100%;
    padding: 5px 5px;
    box-sizing: border-box;
    color: dimgray;
}

</style>