<template>
    <header class="header">
      <div class="logo">My Personal Blog</div>
      <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我</router-link>
        <router-link to="/posts">文章</router-link>
        <router-link to="/littleProjects">小项目</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    background-color: #333;
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .nav a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
  }
  
  .nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>