<template>
<NavBar />

<div class="article-container">
    <h1 class="article-title">{{ articles.title }}</h1>
    <div class="article-content">{{ articles.content }}</div>
   
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import request from "@/utils/request";
export default {
    data(){
        return{
            articles:null,
            loading:true,
        }

    },
    components:{
        NavBar,
    },
    async created(){
        await this.fetchArticle();
    },
    methods:{
        async fetchArticle(){
            try{
            const id = this.$route.params.id;
            const res = await request.get('/articles/{articleId');
            this.articles = res.data;
        }catch(err){
            console.log(err);
            this.$router.push('/')
        }
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
.article-title {
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-bottom:20px;
}
.article-contnet{
    font-size: 16px;
    color: #666;
    line-height: 1.8;
}
</style>




  