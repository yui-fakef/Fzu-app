<template>
<div class="ArticleList">
    <ul v-if="!loading">
        <li v-for="article in articles" :key="article.id" class="article-item" @click="goToDetail(article.id)">
        <span>{{article.title}}</span>
        </li>
      <!-- <RouterView></RouterView> -->
      
   </ul> 
<div v-else>
    <p>Loading...</p>
</div>
</div>
</template>
<script>
import router from '@/router';
import { RouterView } from 'vue-router';
import { getLatestArticleList } from '@/api/Article';

export default {
    data(){
        return{
          articles:[],
          loading:true
        }
    },
    mounted(){
        this.getArticles();
    },
    methods:{
      async getArticles(){
        try{
        const res = await getLatestArticleList();
        this.articles = res.data;
        }catch(err){
          console.log(err);
          alert('获取文章列表失败');
        }finally{
          this.loading = false;
        }
      },
      goToDetail(id){
        this.$router.push({name:'article',params:{id}});
      }
    }
}
</script>

<style>
    .ArticleList {
        background-color: #fff;
        align-items: center;
        justify-content: center;
        display: flex;
        height: 100%;
        width: 70%;
        margin: 0 auto;
        margin-top: 10px;
    }
.article-item{
  cursor:pointer;
  padding:12px;
  border-bottom:1px solid #eee;
  transition:background-color 0.3s ease; 
}
.article-item:hover{
  background-color:#f5f5f5;
}
</style>

