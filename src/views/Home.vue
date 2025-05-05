<template>
  <div class="home">
    <!-- 居中内容 -->
    <div class="center-content">
      <div class="title">欢迎来到我的博客</div>
      <div class="button-group">
        <router-link to="/posts" class="btn"> 小记录 </router-link>
        <router-link to="/about" class="btn">关于我</router-link>
        <router-link to="/contact" class="btn">联系我</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里可以留空，因为我们只是做一个静态首页
</script>

<style scoped>
/* 设置整个页面的高度和背景颜色 */
.home {
  display: flex;
  width: 100%;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  min-height: 100vh; /* 使内容至少占据整个视口高度 */
  padding: 0; /* 移除顶部填充，确保内容能够完全占据屏幕 */
  margin: 0; /* 确保没有默认的外边距影响布局 */
  background-color: #000; /* 背景颜色设为黑色 */
  color: white; /* 文字颜色设为白色以确保可读性 */
}

.title {
  font-size: 3rem;
  color: white; /* 确保标题文字颜色为白色 */
  margin-top: 200px;
  margin-bottom: 150px;
}

.center-content {
  text-align: center;
  height: 100%;
  width: 100%;
}

.button-group {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
}

.btn {
  padding: 40px 40px;
  font-size: 2rem;
  color: rgb(255, 255, 255);
  border: #a8a9a8;
  background-color: #0b0b0b;
  border-radius: 5px;
  text-decoration: none;
  margin: 0 20px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #a8a9a8;
}
</style>