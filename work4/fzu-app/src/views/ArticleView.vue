<template>
<NavBar />

<div class="article-container">
    <h1 class="article-title">{{ currentArticle.title }}</h1>
   
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
    data(){
        return{
            articles: {
                id:1,
                title: "福大新学期校历全解析：上课93天！放假44天！",
                content: "Article Content",
            }
        }

    },
    components:{
        NavBar,
    },
    computed: {
        currentArticle() {
            return this.articles.find(article => article.id === this.$route.params.id);
        }
    }
}
</script>
<style scoped>
.article-container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 1011px;
    height: 958px;
    background: rgba(255,255,255,0.88);
    box-shadow: 0px 7px 24px 0px rgba(131,0,0,0.25);
    margin-top:5px;
}
</style>




  