<template>
  <div class="about-page">
    <!-- 头部区域 -->
    <header class="page-header">
      <h1>关于我</h1>
    </header>

    <!-- 主内容区域 -->
    <section class="content-section">
      <!-- 个人信息卡片 -->
      <div class="profile-card">
        <img src="../assets/008BbPjMgy1hopekngc2uj34q335e7wk.jpg" alt="Avatar" class="avatar"/>
        <h2>杜老三的老公</h2>
        <p>热爱编程与写作的技术爱好者。</p>
        
        <!-- 社交媒体链接 -->
        <div class="social-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <!-- 自我介绍 -->
      <article class="bio">
        <h3>自我介绍</h3>
        <p>大家好，我是杜老三的老公，一名软件开发工程师，专注于前端技术栈，尤其是Vue.js框架的应用和发展。在业余时间，我喜欢写博客分享我的学习心得和技术见解。</p>

        <h3>个人爱好</h3>
        <p>平时喜欢打球健身跑步，一周五练，卧推极限80。</p>

        <h3>音乐基因</h3>
        <div class="music-images">
          <img src="../assets/1620053417-f5ada359f04af42.jpg" alt="音乐基因1" />
          <img src="../assets/2946691234868155.jpg" alt="音乐基因2" />
          <img src="../assets/OIP-C.jpg" alt="音乐基因3" />
          <img src="../assets/R-C.jpg" alt="音乐基因4" />
          <img src="../assets/TB1dYTIPVXXXXaQXXXXXXXXXXXX_!!0-item_pic.avif" alt="音乐基因5" />
        </div>
        <h3>喜欢的歌词</h3>
        <div class="lyrics">
          <p class="lyric-line">拨开面纱回望故乡，只见潮湿的月亮。 --程艾影</p>
          <p class="lyric-line">该来的总会来，该走的也无法挽留。 --这个年纪</p>
          <p class="lyric-line">青春慢慢从身边溜走，我开始变得怀旧。 --这个年纪</p>
          <p class="lyric-line">爱你老妈，明天见。 --万豪</p>
          <p class="lyric-line">萨菲娜，萨菲娜，只有我才懂得你珍贵。 --为你唱首歌</p>
        </div>
        <h3>健身状态</h3>
        <div class="gym-status">
          <div class="gym-info">
            <p><strong>身高:</strong> 174 cm</p>
            <p><strong>体重:</strong> 70 kg</p>
            <p><strong>卧推极限:</strong> 80 kg</p>
            <p><strong>一周训练次数:</strong> 5</p>
            <p><strong>跑步次数:</strong> 2</p>
            <p><strong>引体负重:</strong> 15kg</p>

          </div>
          <div class="gym-photo">
            <img src="../assets/微信图片_20250504093129.jpg" alt="健身照片"/>
          </div>
        </div>
        <h3>吉他学习</h3>
        <div class="guitar-learning">
          <p class="lyric-line">最近练习片段：成都的前奏</p>
          <div class="video-container">
            <video controls width="100%">
              <source src="../assets/WeChat_20250504095538.mp4" type="video/mp4" />
              您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
// 如果需要在这里添加逻辑代码，请根据实际情况编写
</script>

<style scoped>
.about-page {
  background-color: #000;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 20px;
}

.page-header h1 {
  font-size: 2.5rem;
}

.content-section {
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-card {
  text-align: center;
  margin-bottom: 40px;
}

.avatar {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
}

.social-links a {
  color: #42b983;
  margin: 0 10px;
  text-decoration: none;
}

.social-links a:hover {
  text-decoration: underline;
}

.bio {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}

.bio h3 {
  margin-top: 0;
  color: #42b983;
}

.bio p {
  line-height: 1.6;
}

.music-images {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* 自动换行 */
  gap: 10px; /* 图片之间的间距 */
  width: 100%;
}

.music-images img {
  width: calc(20% - 8px); /* 每行刚好放5张图，考虑gap的空隙 */
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.music-images img:hover {
  transform: scale(1.05);
}

.lyrics {
  margin-top: 20px;
  width: 100%;
}

.lyric-line {
  padding: 10px 0;
  font-size: 1rem;
  line-height: 1.5;
  transition: transform 0.3s ease, color 0.3s ease;
  cursor: default;
}

.lyric-line:hover {
  transform: scale(1.05);
  color: #42b983;
}

.gym-status {
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* 确保两边高度相同 */
  width: 100%;
  gap: 20px; /* 间距 */
}

.gym-info, .gym-photo {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  flex: 1; /* 让两者宽度相等 */
}

.gym-info p {
  margin: 5px 0;
  color: white;
  font-size: 2rem;
}

.gym-photo img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.guitar-learning {
  margin-top: 20px;
  width: 100%;
}

.guitar-learning h4 {
  color: #42b983;
  margin-bottom: 10px;
}

.video-container {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(66, 185, 131, 0.3);
}

.video-container video,
.video-container iframe {
  border-radius: 10px;
  display: block;
}
</style>