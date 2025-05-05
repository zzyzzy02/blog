<template>
  <div id="app">
    <!-- 主要内容区域，包含路由视图和侧边栏 -->
    <div class="container">
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view class="main-content" />

    </div>
  </div>
</template>

<script setup>
// 引入所需的组件
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  display: flex;
  flex: 1;
  width: 100%;
  margin: auto;
}

.main-content {
  flex: 3;
  margin-right: 20px;
}

.sidebar {
  flex: 1;
}
</style>