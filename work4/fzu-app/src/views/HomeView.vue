<template>
    <NavBar />
    <main>
    <FunctionGrid />
    <ArticleList :articles="articles" />
    </main>
  </template>
  
  <script>
  import { ref } from 'vue'
  import NavBar from '@/components/NavBar.vue'
  import FunctionGrid from '@/components/FunctionGrid.vue'
  import ArticleList from '@/components/ArticleList.vue'
  export default {
    components:{
      NavBar,
      FunctionGrid,
      ArticleList
    },
  data() {
    return {
      articles: [
        { id:1,title: '福大新学期校历全解析：上课93天！放假44天！', type: '置顶' },
        { id:2,title: '【福州大学2024-2025第一学期校历】', type: '最新' }
      ]
    }
  }
  }   
  </script>


<style>

</style>




