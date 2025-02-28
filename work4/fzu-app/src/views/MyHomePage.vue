<template>
    <NavBar />
    <div class="home-container">
    <img src="~@/assets/defaultAvatar.jpg" class="home-img">
    <div class="home-text">
        <p>个人信息</p>
    </div>
    <button @click="gotoSetpage" class="home-btn">设置</button>
    </div>

    <div class="homedetail">
      <span class="homedetail-item "v-for="(item,index) in homedetail" :key="index">
        {{item}}
      </span>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'MyHomePage',
  components: {
    NavBar
  },
  data() {
    return {
      homedetail: ['动态','文章','专栏','沸点','关注','赞']
    }
  },
  methods: {
    gotoSetpage() {

      this.$router.push({name:'set'});
    }
  }
}



</script>
<style scoped>
.home-container {
    display: block;
    justify-content: center;
    margin: 0 auto;
    width: 1011px;
    height: 30%;
    background: rgba(255,255,255,0.88);
    box-shadow: 0px 7px 24px 0px rgba(131,0,0,0.25);
    margin-top:5px;
    position:relative;
}
.home-img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-top: 20px;
    margin-left:20px;

}
.home-btn {
    width:50px;
    height:50px;
    position:absolute;
    bottom: 10px;
    right: 10px;
}
.homedetail {
  display: flex;
    margin: 0 auto;
    width: 1011px;
    height: 950px;
    background: rgba(255,255,255,0.88);
    box-shadow: 0px 7px 24px 0px rgba(131,0,0,0.25);
    margin-top:5px;
    position:relative;
}
.homedetail-item {
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: all 0.3s;
    color: #34495e;
  
}


</style>