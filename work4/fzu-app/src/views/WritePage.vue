<template>

    <NavBar />
    <textarea v-model="content" placeholder="输入文章标题" class="input-title"></textarea>
    <v-md-editor class="markdown-editor"
      v-model="content" 
      height="500px"
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
    />
    <button @click="publishArticle" class="publish-btn">发布文章</button>
  </template>

  <script>
  import { createArticle } from '@/api/Article';
  import { ref } from 'vue';
  import NavBar from '../components/NavBar.vue';
export default {
    components: {
      NavBar,
    },
    data(){
        return{
          title: '',
          content: '',
        };
    },
    methods: {
        async publishArticle() {
        try{
          const response = await createArticle({
            title: this.title,
            content: this.content,
          });
          if(response.data.success){
            alert('发布成功');
            this.$router.push('/articles');
          }else{
            alert('发布失败');
          }
        }catch(error){
          console.log('发布失败', error.response ? error.response.data : error.message);
        }
      },
      handleUploadImage(event, insertImage) {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        insertImage({ url });
      },
    }
}
  const content = ref(''); // 绑定内容

  // 处理图片上传
  const handleUploadImage = (event, insertImage) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    insertImage({ url });
  };
  </script>
  
  <style>
  .markdown-editor {
    border:black 1px solid;
  }
  .input-title {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    margin-top: 20px;
    border: none;
    font-size:20px;
  }
</style>