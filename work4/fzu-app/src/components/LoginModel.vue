<template>
    <div v-if="show" class="login-modal">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <h2>{{ isRegister ? '注册' : '登录' }}</h2>
        <input type="text" v-model="username" placeholder="用户名" />
        <input type="password" v-model="password" placeholder="密码" />
        <button @click="isRegister ? register() : login()">
        {{ isRegister ? '注册' : '登录' }}
      </button>
      <p @click="isRegister = !isRegister" style="cursor: pointer; color: blue;">
        {{ isRegister ? '已有账号？去登录' : '没有账号？去注册' }}
      </p>
      </div>
    </div>
  </template>
  
  <script>
  import request from '@/api/request';
  import { Login } from '@/api/user';
  import { Register } from '@/api/user';
  export default {
    props: {
      show: Boolean
    },
    data() {
      return {
        username: '',
        password: '',
        isRegister: false,
      };
    },

    methods: {
      close() {
        this.$emit('close');
      },
      async login() {
        try {
          const response = await Login({
      username: this.username,
      password: this.password
        })
          if (response.data.success) {
            this.$emit('login-success');
          } else {
            alert('登录失败，请检查用户名和密码');
          }
        } catch (error) {
          console.error('登录失败', error.response ? error.response.data : error.message);
        }
      },
      async register() {
        try {
          const response = await Register({
      username: this.username,
      password: this.password
        })
          if (response.data.success) {
            alert('注册成功，请登录');
            this.isRegister = false;
          }else{
            alert('注册失败，请检查用户名和密码');
          }
        }catch (error) {
          console.error('注册失败', error.response ? error.response.data : error.message);
        }
      }
    }
  };
  </script>
  
  <style>
.login-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

.close {
  float: right;
  cursor: pointer;
}

  </style>
  