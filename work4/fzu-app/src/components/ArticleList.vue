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

<!-- <template>
    <div class="group_7 flex-row">
            <div class="box_20 flex-col"></div>
            <div class="box_21 flex-col justify-between">
              <div class="block_7 flex-col"></div>
              <div class="block_8 flex-col"></div>
              <div class="block_9 flex-col"></div>
              <div class="block_10 flex-col"></div>
              <div class="block_11 flex-col"></div>
              <div class="block_12 flex-col"></div>
              <div class="block_13 flex-col"></div>
              <div class="block_14 flex-col"></div>
            </div>
            <div class="box_22 flex-col">
              <router-link :to="{name:'article'}">
              <span class="text_20">
                >{{ article.title }}
                </span></router-link>
                <router-view></router-view>
              <span class="text_21">【福州大学2024-2025第一学期校历】</span>
              <div class="group_8 flex-row">
                <img
                  class="thumbnail_2"
                  referrerpolicy="no-referrer"
                  src="https://lanhu-oss.lanhuapp.com/FigmaDDSSlicePNGe4fc475202ce7faae98cae883feebc74.png"
                />
                <span class="text_22">4022</span>
                <img
                  class="thumbnail_3"
                  referrerpolicy="no-referrer"
                  src="https://lanhu-oss.lanhuapp.com/FigmaDDSSlicePNG2664d01dc72cebb367002cbc68bfed95.png"
                />
                <span class="text_23">11</span>
                <img
                  class="thumbnail_4"
                  referrerpolicy="no-referrer"
                  src="https://lanhu-oss.lanhuapp.com/FigmaDDSSlicePNGa9431f700100e4ad0fab9fa708febc45.png"
                />
                <span class="text_24">4</span>
              </div>
            </div>
            <div class="text-wrapper_1 flex-col">
              <span class="text_25">置顶</span>
            </div>
          </div>
</template>
<script>
import router from '@/router';

export default {

    methods:{
        handleClick(){

            console.log("click")
        }
    },
}
</script>
<style>

.group_7 {
    background-color: #fff;
        align-items: center;
        justify-content: center;
        display: flex;
        margin: 0 auto;
        margin-top: 10px;
        box-shadow: 0px 7px 23px 0px rgba(131, 0, 0, 0.25);
        background-color: rgba(255, 255, 255, 0.88);
        width: 70%;
        height: 100%;
}
.box_20 {
  background-color: rgba(163, 0, 0, 1);
  width: 9px;
  height: 924px;
  margin: 34px 0 0 66px;
}
.box_21 {
  width: 7px;
  height: 901px;
  margin: 57px 0 0 29px;
}
.block_7 {
  background-color: rgba(0, 0, 0, 1);
  width: 7px;
  height: 100px;
}
.block_8 {
  background-color: rgba(0, 0, 0, 1);
  width: 7px;
  height: 100px;
  margin-top: 20px;
}
.block_9 {
  background-color: rgba(0, 0, 0, 1);
  width: 7px;
  height: 100px;
  margin-top: 20px;
}
.block_10 {
  background-color: rgba(0, 0, 0, 1);
  width: 7px;
  height: 100px;
  margin-top: 20px;
}
.block_11 {
  background-color: rgba(0, 0, 0, 1);
  width: 7px;
  height: 100px;
  margin-top: 20px;
}
.block_12 {
  background-color: rgba(0, 0, 0, 1);
  width: 7px;
  height: 100px;
  margin-top: 20px;
}
.block_13 {
  background-color: rgba(0, 0, 0, 1);
  width: 7px;
  height: 100px;
  margin-top: 20px;
}
.block_14 {
  background-color: rgba(0, 0, 0, 1);
  width: 7px;
  height: 61px;
  margin-top: 20px;
}
.box_22 {
  width: 631px;
  height: 899px;
  margin-top: 59px;
}
.text_20 {
  width: 428px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-family: PingFang SC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-left: 7px;
}
.text_21 {
  width: 314px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(68, 68, 68, 1);
  font-size: 18px;
  font-family: PingFang SC-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 13px;
}
.group_8 {
  width: 124px;
  height: 19px;
  margin: 11px 0 0 14px;
}
.thumbnail_2 {
  width: 18px;
  height: 12px;
  margin-top: 3px;
}
.text_22 {
  width: 29px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(68, 68, 68, 1);
  font-size: 12px;
  font-family: PingFang SC-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 12px;
  margin: 1px 0 0 2px;
}
.thumbnail_3 {
  width: 17px;
  height: 17px;
  margin-left: 8px;
}
.text_23 {
  width: 15px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(68, 68, 68, 1);
  font-size: 12px;
  font-family: PingFang SC-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 12px;
  margin-top: 1px;
}
.thumbnail_4 {
  width: 17px;
  height: 17px;
  margin: 2px 0 0 7px;
}
.text_24 {
  width: 8px;
  height: 17px;
  overflow-wrap: break-word;
  color: rgba(68, 68, 68, 1);
  font-size: 12px;
  font-family: PingFang SC-Regular;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  line-height: 12px;
  margin: 1px 0 0 3px;
}
.group_9 {
  background-color: rgba(0, 0, 0, 1);
  width: 420px;
  height: 22px;
  margin: 30px 0 0 7px;
}
.group_10 {
  background-color: rgba(68, 68, 68, 1);
  width: 624px;
  height: 17px;
  margin: 17px 0 0 7px;
}
.group_11 {
  background-color: rgba(217, 217, 217, 1);
  width: 76px;
  height: 13px;
  margin: 17px 0 0 7px;
}
.group_12 {
  background-color: rgba(0, 0, 0, 1);
  width: 232px;
  height: 22px;
  margin: 31px 0 0 7px;
}
.group_13 {
  background-color: rgba(68, 68, 68, 1);
  width: 501px;
  height: 17px;
  margin: 17px 0 0 7px;
}
.group_14 {
  background-color: rgba(217, 217, 217, 1);
  width: 76px;
  height: 13px;
  margin: 17px 0 0 7px;
}
.group_15 {
  background-color: rgba(0, 0, 0, 1);
  width: 557px;
  height: 22px;
  margin: 38px 0 0 7px;
}
.group_16 {
  background-color: rgba(68, 68, 68, 1);
  width: 288px;
  height: 17px;
  margin: 17px 0 0 7px;
}
.group_17 {
  background-color: rgba(217, 217, 217, 1);
  width: 76px;
  height: 13px;
  margin: 17px 0 0 7px;
}
.group_18 {
  background-color: rgba(0, 0, 0, 1);
  width: 360px;
  height: 22px;
  margin: 33px 0 0 7px;
}
.group_19 {
  background-color: rgba(68, 68, 68, 1);
  width: 549px;
  height: 17px;
  margin: 17px 0 0 7px;
}
.group_20 {
  background-color: rgba(217, 217, 217, 1);
  width: 76px;
  height: 13px;
  margin: 17px 0 0 7px;
}
.group_21 {
  background-color: rgba(0, 0, 0, 1);
  width: 456px;
  height: 22px;
  margin: 33px 0 0 7px;
}
.group_22 {
  background-color: rgba(68, 68, 68, 1);
  width: 436px;
  height: 17px;
  margin: 17px 0 0 7px;
}
.group_23 {
  background-color: rgba(217, 217, 217, 1);
  width: 76px;
  height: 13px;
  margin: 17px 0 0 7px;
}
.group_24 {
  background-color: rgba(0, 0, 0, 1);
  width: 86px;
  height: 22px;
  margin: 34px 0 0 7px;
}
.group_25 {
  background-color: rgba(68, 68, 68, 1);
  width: 393px;
  height: 17px;
  margin: 17px 0 0 7px;
}
.group_26 {
  background-color: rgba(217, 217, 217, 1);
  width: 76px;
  height: 13px;
  margin: 17px 0 0 7px;
}
.group_27 {
  background-color: rgba(0, 0, 0, 1);
  width: 386px;
  height: 22px;
  margin: 31px 0 0 7px;
}
.group_28 {
  background-color: rgba(68, 68, 68, 1);
  width: 522px;
  height: 17px;
  margin: 18px 0 0 7px;
}
.text-wrapper_1 {
  height: 100px;
  background: url(https://lanhu-oss.lanhuapp.com/FigmaDDSSlicePNG489d2058789466c73c9a630ad324436f.png)
    100% no-repeat;
  background-size: 100% 100%;
  width: 220px;
  margin: 57px 40px 0 9px;
}
.text_25 {
  width: 32px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  font-family: SJjinsongjianfan-Regular;
  font-weight: normal;
  text-align: left;
  margin: 11px 0 0 183px;
}
</style> -->
