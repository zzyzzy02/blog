<template>
  <div class="posts-page">
    <header class="page-header">
      <h1>文章分类</h1>
    </header>

    <section class="categories-section">
      <router-link 
        v-for="category in categories" 
        :key="category.id" 
        :to="category.path"
        class="category-card"
      >
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
      </router-link>
    </section>

  </div>
</template>

<script setup>
// 分类列表
const categories = [
  {
    id: 1,
    title: '前端开发',
    description: '关于HTML/CSS/JavaScript和Vue等前端技术的文章。',
    path: '/frontend'
  },
  {
    id: 2,
    title: '后端开发',
    description: 'Node.js、Java、Python 等后端技术相关的内容分享。',
    path: '/backend'
  },
  {
    id: 3,
    title: '随笔杂谈',
    description: '生活感悟、学习心得、日常记录等内容。',
    path: '/life'
  },
  {
    id: 4,
    title: '技术笔记',
    description: '整理的技术知识点与总结，方便查阅复习。',
    path: '/notes'
  },
  {
    id: 5,
    title: '健身',
    description: '健身的记录和总结。',
    path: '/power'
  }

];
</script>

<!-- 样式部分保持不变 -->

<style scoped>
/* 保持原有的样式 */
.posts-page {
  background-color: #000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #42b983;
}

.categories-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  width: 100%;
}

.category-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(66, 185, 131, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  text-decoration: none; /* 确保链接无下划线 */
  color: inherit; /* 确保链接文本颜色继承父级 */
}

.category-card:hover {
  background-color: rgba(66, 185, 131, 0.1);
  transform: translateY(-5px);
}

.category-card h3 {
  margin-top: 0;
  color: #42b983;
}

.category-card p {
  font-size: 0.95rem;
  line-height: 1.4;
  color: #ccc;
}
</style>