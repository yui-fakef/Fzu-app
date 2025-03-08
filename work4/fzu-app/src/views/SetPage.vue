<template>
  <NavBar />
  <div class="setting">
    <h3>设置</h3>
    <div class="set-item1">
      <p>编辑资料</p>
    </div>
    <div class="set-item2">
      <p>账号设置</p>
    </div>
  </div>
  <div class="message-set">
    <p class="title">个人信息设置</p>
    <div class="avatar-upload">
      <label for="avatar-input">
        <img :src="avatar" class="avatar-preview" />
        <input
          type="file"
          id="avatar-input"
          accept="image/*"
          @change="handleAvatarChange"
          hidden
        />
      </label>
    </div>
    <div class="text-input">
      <label for="name">用户名</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="text-input">
      <label for="introduction">简介</label>
      <textarea id="introduction" v-model="introduction"></textarea>
    </div>
    <button class="sav-btn" @click="saveProfile">保存</button>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import defaultAvatar from '@/assets/defaultAvatar.jpg';
import { UpdataAvatar } from '@/api/user';

export default {
  name: 'SetPage',
  components: {
    NavBar,
  },
  data() {
    return {
      name: '',
      introduction: '',
      avatar: defaultAvatar,
    };
  },
  methods: {
    async handleAvatarChange(e) {
      const file = e.target.files[0];
      if (file) {
        // 预览头像
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatar = e.target.result;
        };
        reader.readAsDataURL(file);

        // 上传头像到后端
        const formData = new FormData();
        formData.append('avatar', file); // 后端接口要求的字段名
        try {
          const res = await UpdataAvatar(formData);
          if (res.data.success) {
            alert('头像上传成功');
          } else {
            alert('头像上传失败');
          }
        } catch (err) {
          console.error('上传失败', err);
          alert('上传失败，请稍后重试');
        }
      }
    },
    async saveProfile() {
      // 保存用户信息的逻辑
      alert('保存成功');
    },
  },
};
</script>

<style >
.message-set {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 50%;
    height: 950px;
    padding: 20px;
    background: rgba(255,255,255,0.88);
    box-shadow: 0px 7px 24px 0px rgba(131,0,0,0.25);
    margin-top:5px;
    border-radius: 4px;
    position: relative;
}
.title{
  position:absolute;
  left: 10px;
  top:10px;
}
.text-input{
    display: flex;
    flex-direction: row;
    align-items: center ;
    margin:20px 0;
    width: 70%;
}
.text-input label{
  width: 80px;
  margin-right:20px;
  text-align: right;
}
.text-input input,
.text-input textarea{
  flex:1;/*占据剩余空间 */
  padding:8px;
  border:1px solid #ccc;
  border-radius: 4px;
}
.sav-btn{
  position: absolute;
  bottom:20px;
  right:20px;
  padding:10px 20px;
  background-color: #a50606;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.sav-btn:hover{
  background-color: #800000;
}


.avatar-upload{
  display: flex;
  position:relative;
  width:100%;
  justify-content: center;
  margin: 20px 0;
}
.avatar-preview{
  width: 100px;
  height: 100px;
  border-radius:50%;
  object-fit: cover;
  border: 2px solid #ddd ;
  cursor:pointer;
  transition:0.3s;
}
.avatar-preview:hover{
  opacity: 0.8s;
}
.setting{
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  width: 200px;
  height: 30%;
  box-shadow: 0px 7px 24px 0px rgba(131,0,0,0.25);
  margin-top:5px;
  border-radius: 4px;
  margin-left: 20px;
}
.set-item1{
  cursor:pointer;

}
.set-item1:hover{
  color: #a50606;
}
.set-item2{
  cursor:pointer;

}
.set-item2:hover{
  color: #a50606;
}

</style>

<style >
.message-set {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 50%;
    height: 950px;
    padding: 20px;
    background: rgba(255,255,255,0.88);
    box-shadow: 0px 7px 24px 0px rgba(131,0,0,0.25);
    margin-top:5px;
    border-radius: 4px;
    position: relative;
}
.title{
  position:absolute;
  left: 10px;
  top:10px;
}
.text-input{
    display: flex;
    flex-direction: row;
    align-items: center ;
    margin:20px 0;
    width: 70%;
}
.text-input label{
  width: 80px;
  margin-right:20px;
  text-align: right;
}
.text-input input,
.text-input textarea{
  flex:1;/*占据剩余空间 */
  padding:8px;
  border:1px solid #ccc;
  border-radius: 4px;
}
.sav-btn{
  position: absolute;
  bottom:20px;
  right:20px;
  padding:10px 20px;
  background-color: #a50606;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.sav-btn:hover{
  background-color: #800000;
}


.avatar-upload{
  display: flex;
  position:relative;
  width:100%;
  justify-content: center;
  margin: 20px 0;
}
.avatar-preview{
  width: 100px;
  height: 100px;
  border-radius:50%;
  object-fit: cover;
  border: 2px solid #ddd ;
  cursor:pointer;
  transition:0.3s;
}
.avatar-preview:hover{
  opacity: 0.8s;
}
.setting{
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: left;
  background-color: white;
  width: 200px;
  height: 30%;
  box-shadow: 0px 7px 24px 0px rgba(131,0,0,0.25);
  margin-top:5px;
  border-radius: 4px;
  margin-left: 20px;
}
.set-item1{
  cursor:pointer;

}
.set-item1:hover{
  color: #a50606;
}
.set-item2{
  cursor:pointer;

}
.set-item2:hover{
  color: #a50606;
}

</style>