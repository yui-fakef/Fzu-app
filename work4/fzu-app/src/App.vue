<!-- <template>

<router-view></router-view>

<div class="backgroud-container"><img src="D:\front\work4\fzu-app\src\assets\福字底.png" alt=""></div>

</template> -->

<!-- <script>
import router from './router';
import ArticleView from './views/ArticleView.vue'
import HomeView from './views/HomeView.vue';


export default {
  // data(){
  //   return{
  //     tapComponent: 'HomeView'
  //   }
  // },
  // components: {
  //   HomeView,
  //   ArticleView
  // },

}
</script> -->


<!-- <style>


.backgroud-container {
width:100%;
height:100%;

/* background-color:#fff3f3  */



}
</style> -->

<template>
    <router-view></router-view>
    <div class="background-container"></div>
</template>

<script>
import router from './router';
import ArticleView from './views/ArticleView.vue'
import HomeView from './views/HomeView.vue';


export default {
  // data(){
  //   return{
  //     tapComponent: 'HomeView'
  //   }
  // },
  // components: {
  //   HomeView,
  //   ArticleView
  // },

}
</script>

<style >

.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/福字底.png');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  z-index: -1;
}




</style>