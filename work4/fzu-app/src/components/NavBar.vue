<template>
  <div class="nav-container">
   
    <img src="~@/assets/logo.png" class="logo-img">
    <span class="logotitle">掌上福大</span>

    <div class="search-box">
      <input
        type="text"
        placeholder="搜索..."
      >
    </div>

    <span
      v-for="(item, index) in navItems"
      :key="index"
      class="nav-item"
    >
      {{ item }}
    </span>

    <div v-if="!isLogined" class="login-section">
    <button class="login-btn" @click="showLoginModal=true">登录/注册</button>
    </div>
    <LoginModel :show="showLoginModal" @close="showLoginModal=false"  @login-success="onLoginSuccess" />
  <div class="head" @mouseenter="showDropdown=true" @mouseleave="showDropdown=false">
    <img src="~@/assets/defaultAvatar.jpg" alt="头像" class="avatar">
    <div v-show="showDropdown" class="dropdown-menu">
      <div class="dropdown-item" @click="goToMyHome">
        我的首页
        </div>
      </div>

  </div>
    <!-- <button class="writer">写文章</button> -->
    <div class="section_4 flex-row">
          <img
            class="label_1"
            referrerpolicy="no-referrer"
            src="https://lanhu-oss.lanhuapp.com/FigmaDDSSlicePNG18feee21c8f1db815d409154eae17ba4.png"
          />
          <button @click='goToWritePage' class="text_9">写文章</button>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue';
import LoginModel from './LoginModel.vue';
export default {
  components: {
    LoginModel
  },
  data(){
    return{
      showDropdown:false,
      navItems: [
      '首页', '查课表', '查成绩',
      '卖舍友', '我要表白', '加入我们'
    ],
    showLoginModal:false,
    isLogined:false,
    }
  },
  methods: {
    goToMyHome(){
      this.$router.push({name:'MyHome'})
      this.showDropdown=false
    },
    goToWritePage(){
      this.$router.push({name:'write'})
    },
    // goToLogin(){
    //   this.$router.push({name:'login'})
    // },
    onLoginSuccess(){
      this.isLogined=true;
      this.showLoginModal=false;
    }
  }
} 
// const leftNavItems = navItems.value.slice(0, 3);
// const rightNavItems = navItems.value.slice(3);
</script>

<style>


.section_4 {
  border-radius: 10%;
  background-color: rgba(163, 0, 0, 1);
  width: 120px;
  height: 40px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.label_1 {
  width: 30px;
  height: 30px;
  margin: 8px 0 0 4px;
}
.text_9 {
  width: 80px;
  height: 30px;
  overflow-wrap: break-word;
  color: rgba(224, 224, 224, 1);
  font-size: 20px;
  font-family: SJjinsongjianfan-Regular;
  font-weight: normal;
  text-align: center;
  white-space: nowrap;
  line-height: 30px;
  margin: 4px 7px 0 5px;
  background-color: rgba(163, 0, 0, 1);
  border:none;
  cursor:pointer;
}

.logotitle {
  font-size: 1.5em;
  color: #2c3e50;
}

.logo-img {
  width:70px;
  height:50px;
  border-radius: 50%;
  margin-left:auto;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  background: #FFFFFF;
  box-shadow: 0px 5px 27px 3px rgba(213,68,71,0.21);
  border-radius: 0px 0px 0px 0px
}

/* .logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #2c3e50;
  margin-right: 15px;
} */

.nav-item {
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s;
  color: #34495e;
  
}


.head{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left:auto;
  position:relative;
}
.head:hover{
  background-color: #e9ecef;
  
}
.avatar{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
/* 下拉菜单 */
.dropdown-menu{
  display: block;
  position:absolute;
  top: 40px;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border:1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width:200px;
  height:200px;
} 
 .dropdown-item{
  padding: 8px 16px;
  cursor:pointer;
  transition:background-color 0.2s;
  top:0;
  left:0;
}
.dropdown-item:hover{
  background-color: #f5f5f5;
} 
/* .writer{
  display: inline-block;
  justify-content: center;
  text-align: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
} */

.nav-item:hover {
  background: #e9ecef;
  color: #2c3e50;
}
.writer{
  background-color: #8B0000;
  color: #fff;
  border:none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor:pointer;
}
.writer:hover{
  background-color: #B22222;
}
.search-box {
  text-align: center;
}

.search-box input {
  padding: 8px 15px;
  border: 1px solid #ced4da;
  border-radius: 20px;
  width: 200px;
  transition: all 0.3s;
}

.search-box input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}
</style>

