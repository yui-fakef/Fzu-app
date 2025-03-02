<template>
<div class="ArticleList">
    <ul v-if="!loading">
      <router-link :to="{name:'article',params:{id:article.id}}" tag="li" v-for="article in articles" :key="article.id" class="article-item">
        <li>
        <span>{{article.title}}</span>
        </li>
      </router-link>
      <RouterView></RouterView>
      
   </ul> 
<div v-else>
    <p>Loading...</p>
</div>
</div>
</template>
<script>
import router from '@/router';
import { RouterView } from 'vue-router';
import request from '@/utils/request';

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
        const res = await request.get('/articles/latest');
        this.articles = res.data;
        }catch(err){
          console.log(err);
        }finally{
          this.loading = false;
        }
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

