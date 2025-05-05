<template>
    <div class="contact-page">
      <header class="page-header">
        <h1>联系我</h1>
      </header>
  
      <section class="contact-section">
        <div class="contact-card">
          <p><span class="icon">📱</span> <strong>微信：</strong> zzy_94666666</p>
          <p><span class="icon">🐧</span> <strong>QQ：</strong> 2017105459</p>
          <p><span class="icon">✉️</span> <strong>邮箱：</strong> 2017105459@qq.com</p>
          <p><span class="icon">🎥</span> <strong>抖音：</strong> 1105933188
          </p>
        </div>
  
        <div class="contact-note">
          <p>欢迎通过以上方式联系我，期待与你的交流 😊</p>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // 可以在这里添加交互逻辑，例如复制按钮、点击跳转等
  </script>
  
  <style scoped>
  .contact-page {
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
    margin-bottom: 30px;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
    color: #42b983;
  }
  
  .contact-section {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(66, 185, 131, 0.2);
    transition: background-color 0.3s ease;
  }
  
  .contact-card p {
    margin: 10px 0;
    font-size: 1.1rem;
  }
  
  .icon {
    margin-right: 10px;
  }
  
  .contact-note {
    text-align: center;
    font-size: 1rem;
    color: #ccc;
  }
  </style>