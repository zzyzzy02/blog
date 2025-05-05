import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { createApp } from 'vue';

// 页面组件
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Posts from './views/Posts.vue';

// 分类详情页（如果适用）
import Frontend from './views/categories/Frontend.vue';
import Backend from './views/categories/Backend.vue';
import Life from './views/categories/Life.vue';
import Notes from './views/categories/Notes.vue';
import Power from './views/categories/Power.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/posts', component: Posts },
    // 将子路由改为顶级路由
    { path: '/frontend', component: Frontend }, // 注意这里没有包含 '/posts'
    { path: '/backend', component: Backend },   // 注意这里没有包含 '/posts'
    { path: '/life', component: Life },         // 注意这里没有包含 '/posts'
    { path: '/notes', component: Notes },       // 注意这里没有包含 '/posts'
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/power', component: Power }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');