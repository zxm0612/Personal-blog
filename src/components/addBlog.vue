<template>
    <div id="wrap">
        <div id="add-blog">
            <h2>添加博客</h2>
            <form action="" v-if="submmited">
                <label for="">博客标题：</label>
                <input type="text" v-model="blog.title" required>
                <label for="" >博客内容：</label>
                <textarea v-model="blog.content" required></textarea>

                <div id="checkboxes">
                    
                    <input type="checkbox" value="Vue.js" v-model="blog.categories">
                    <label for="">Vue.js</label>        
                    <input type="checkbox" value="Node.js" v-model="blog.categories">
                    <label for="">Node.js</label>
                    <input type="checkbox" value="React.js" v-model="blog.categories">
                    <label for="">React.js</label>
                    <input type="checkbox" value="Angular4.js" v-model="blog.categories">
                    <label for="">Angular4.js</label>
                </div>
                <label for="">作者：</label>
                <select name="" id="" v-model="blog.author">
                    <option v-for="(author,index) in authors" :key="index">
                        {{author}}
                    </option>
                </select>
                <button @click.prevent="postdata">添加博客</button>
            </form>
            <div v-if="!submmited">
            <h4> 博客添加成功</h4>
            </div>
            <div id="preview">
                <h2>博客总览</h2>
                <h4>博客标题：{{blog.title}}</h4>
                <span><b>作者：</b>{{blog.author}}</span>
                <span><b>博客分类：</b></span>
                <ul>
                    <li v-for="(category,index) in blog.categories" :key="index">
                        {{category}}
                    </li>
                </ul> 
                <p>博客内容：{{blog.content}}</p>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'add-blog',
    data(){
        return {
            blog:{
                title:'',
                content:'',
                categories:[],
                author:'',
            },
            submmited:true,
            authors:['郑新明','阿明','小郑']
        }
    },
    methods:{
        postdata:function(){
            this.$Axios.post("/api/posts.json",this.blog)
                .then(res=>{
                    console.log(res);
                    this.submmited = false;
                })
                .catch(erro=>{
                    console.log(erro)
                })
        }
            
        
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#wrap{
    width: 1200px;
    background: #eee;
    margin: 0 auto;
    padding: 20px 20px;
}
#add-blog * {
    box-sizing:border-box;
}
#add-blog {
    border: 1px solid #eee;
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input[type="text"],textarea,select{
    display: block;
    width:100%;
    padding: 8px;
}
textarea{
    height: 150px;
}
#checkboxes label {
    display: inline-block;
    margin-top: 5px;  
}
#checkboxes input {
    display: inline-block;
    margin-top: 5px;
    margin-left: 15px;
}
button {
    background: darkgreen;
    color: #fff;
    border: 0;
    margin: 20px 0;
    padding: 15px 15px;
    border-radius:4px;
    cursor:pointer;
    font-weight: bold;
}
#preview {
    margin: 20px auto;
    padding: 10px 20px;
    border: darkgrey 1px double;
}
ul, li {
    list-style: none;
    display: inline;
    margin: 0 0;
    padding: 0 0;
}
ul{
    margin-left: -10px;
}
li{
    margin-right:8px;
}
span{
    display: inline-block;
    margin-right: 10px;
}
</style>