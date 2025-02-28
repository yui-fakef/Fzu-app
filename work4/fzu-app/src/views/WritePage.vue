<template>


    <textarea v-model="content" placeholder="输入文章标题" class="input-title"></textarea>
    <v-md-editor class="markdown-editor"
      v-model="content" 
      height="500px"
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
    />
  </template>

  <script>
  import { ref } from 'vue';
export default {

    data(){
        return{
            content: ''
        }
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
    border: none;
    font-size:20px;
  }
</style>