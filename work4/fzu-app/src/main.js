// import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import  VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import 'github-markdown-css/github-markdown.css'

VMdEditor.use(githubTheme)
import router from './router.js'


const app = createApp(App)
app.use(router)
app.use(VMdEditor)
app.mount('#app')
