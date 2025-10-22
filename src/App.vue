<script setup>
import { ref } from 'vue'

// --- 1. 个人简介数据 ---
const profile = ref({
  // [必须] 使用个人照片或 Logo，这里用占位符
  avatar: 'https://via.placeholder.com/150/007AFF/FFFFFF?text=ME', 
  name: "你的名字",
  title: "前端开发者 | UI/UX 爱好者 | 终身学习者",
  bio: "你好！我是一名热衷于构建美观、易用 Web 界面的开发者。我痴迷于代码的简洁与高效，并始终在探索技术与设计之间的完美平衡。"
})

// --- 2. 个人项目数据 ---
const projects = ref([
  {
    id: 1,
    title: "项目一：个人网站 v1.0",
    description: "一个使用 Vue 3 和 Vite 构建的现代、响应式单页应用，用于展示个人作品集。",
    links: [
      { text: "GitHub 仓库", url: "#" } // 替换成你自己的链接
    ]
  },
  {
    id: 2,
    title: "项目二：一个很棒的 App",
    description: "一个功能齐全的效率工具，使用 XX 技术栈开发，解决了 XX 痛点。",
    links: [
      { text: "GitHub 仓库", url: "#" },
      { text: "在线演示", url: "#" }
    ]
  },
  {
    id: 3,
    title: "项目三：技术博客",
    description: "基于 (Markdown/Headless CMS) 搭建的个人技术分享平台。",
    links: [
      { text: "查看博客", url: "#" }
    ]
  }
])

// --- 3. 社交链接数据 (使用 SVG 图标) ---
const socials = ref([
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/你的用户名", // 替换成你自己的链接
    // GitHub Icon SVG Path
    svgIcon: "M9 19c-4.3 1.4 -4.3-1.8 -5-2.2c.7 0 1.4-.3 2.1-.7c-1.3-.3 -2.3-1.4 -2.3-2.8c0-1.3 .5-2.3 1.3-3.1c-.1-.3 -.6-1.5 .1-3.1c0 0 1-.3 3.3 1.2c1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2c.7 1.6 .2 2.8 .1 3.1c.8 .8 1.3 1.8 1.3 3.1c0 1.4-1 2.5-2.3 2.8c.7 .4 1.3 1.1 1.3 2.2c0 1.6-.0 2.9-.0 3.3c0 .3 .2 .7 .7 .6c3.7-1.2 6.3-4.5 6.3-8.5C22 6.1 17.9 2 12 2S2 6.1 2 12c0 4 2.6 7.3 6.3 8.5c.5 .1 .7-.3 .7-.6c0-.4-.0-1.7-.0-3.3z"
  },
  {
    id: 2,
    name: "稀土掘金", // 或 LinkedIn
    url: "https://juejin.cn/user/你的ID", // 替换成你自己的链接
    // Juejin (Si) Icon SVG Path (简化的 "Si" 图标)
    svgIcon: "M12 2.5l8.25 15H3.75L12 2.5z M12 6.34L6.37 16h11.26L12 6.34z"
  },
  {
    id: 3,
    name: "Email",
    url: "mailto:youremail@example.com", // 替换成你自己的链接
    // Email Icon SVG Path
    svgIcon: "M22 4H2C.9 4 0 4.9 0 6v12c0 1.1 .9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 6l-8 5l-8-5h16zM2 18V8l10 6.2L22 8v10H2z"
  }
])
</script>

<template>
  <div class="page-wrapper">
    <div class="content-container">

      <header class="profile">
        <img :src="profile.avatar" alt="个人头像" class="avatar">
        <h1>{{ profile.name }}</h1>
        <p class="tagline">{{ profile.title }}</p>
        <p class="bio">{{ profile.bio }}</p>
      </header>

      <section class="projects">
        <h2 class="section-title">我的项目</h2>
        <div class="project-grid">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-links">
              <a 
                v-for="link in project.links" 
                :key="link.text" 
                :href="link.url" 
                target="_blank"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="socials">
        <h2 class="section-title">联系我</h2>
        <div class="social-icons">
          <a 
            v-for="social in socials" 
            :key="social.id" 
            :href="social.url" 
            :title="social.name" 
            target="_blank" 
            class="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <path :d="social.svgIcon" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </section>

      <footer class="router-area">
        <nav>
          <RouterLink to="/">首页</RouterLink> |
          <RouterLink to="/about">关于</RouterLink>
        </nav>
        <div class="router-content">
          <RouterView />
        </div>
      </footer>

    </div>
  </div>
</template>

<style scoped>
/* CSS 变量定义 (符合需求文档)
  --primary-color: 现代蓝
  --text-color: 深灰色
  --text-secondary: 蓝灰色
  --bg-color: 浅灰色 (页面背景)
  --card-bg: 白色 (卡片背景)
  --shadow: 微妙的阴影
  --border-radius: 统一定义的圆角
*/
.page-wrapper {
  --primary-color: #007AFF;
  --text-color: #333333;
  --text-secondary: #606F7B;
  --bg-color: #F9F9F9;
  --card-bg: #FFFFFF;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  --border-radius: 8px;

  /* [需求 4.4] 全局系统字体栈 */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
}

/* [需求 4.2] 内容居中容器 */
.content-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px; /* 顶部和底部 40px, 左右 20px (用于移动端) */
}

/* [需求 4.4] 字体层级 */
h1, h2, h3 {
  color: #2c3e50; /* 标题使用更深的颜色 */
  font-weight: 600;
}
h2.section-title {
  font-size: 1.8rem;
  text-align: center;
  margin-top: 60px; /* [需求 4.2] 模块间距 */
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}
p {
  line-height: 1.6; /* [需求 4.4] 易读行高 */
}

/* --- 1. 个人简介 (Profile) 样式 --- */
/* [需求 3.1] */
.profile {
  text-align: center;
  margin-bottom: 60px; /* [需求 4.2] 模块间距 */
}
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* [需求 3.1] 圆形头像 */
  border: 4px solid var(--primary-color); /* [需求 4.3] 使用主色调 */
  object-fit: cover;
  margin-bottom: 15px;
  box-shadow: var(--shadow);
}
.profile h1 {
  font-size: 2.5rem;
  margin: 15px 0 5px;
}
.profile .tagline {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 500;
}
.profile .bio {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 20px auto 0;
  color: #555;
}

/* --- 2. 个人项目 (Projects) 样式 --- */
/* [需求 3.2] & [需求 4.5] */
.project-grid {
  display: grid;
  /* [需求 4.1] 响应式网格布局 */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}
.project-card {
  background: var(--card-bg);
  border-radius: var(--border-radius); /* [需求 4.5] 卡片圆角 */
  box-shadow: var(--shadow); /* [需求 4.5] 卡片阴影 */
  padding: 25px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}
.project-card h3 {
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--primary-color);
}
.project-card p {
  margin-bottom: 20px;
  color: var(--text-secondary);
}
.project-links a {
  text-decoration: none; /* [需求 4.5] 移除下划线 */
  color: var(--primary-color);
  font-weight: 600;
  margin-right: 15px;
  transition: color 0.2s; /* [需求 4.5] 平滑过渡 */
}
.project-links a:hover {
  color: #0056b3; /* 主色调的深色版 */
}

/* --- 3. 社交链接 (Socials) 样式 --- */
/* [需求 3.3] */
.socials {
  text-align: center;
  margin-bottom: 60px;
}
.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px; /* 图标间距 */
}
.social-link {
  color: var(--text-secondary);
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out; /* [需求 4.5] */
}
.social-link:hover {
  color: var(--primary-color); /* [需求 4.5] 悬停变为主色调 */
  transform: scale(1.1); /* [需求 4.5] 轻微上移 (放大) */
}
.social-link svg {
  /* SVG 尺寸已在 <template> 中定义为 32x32 */
  display: block;
}

/* --- 4. 路由区域 (Footer) 样式 --- */
.router-area {
  text-align: center;
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid #ddd;
  color: #999;
}
.router-area nav {
  margin-bottom: 20px;
}
.router-area nav a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  margin: 0 10px;
  transition: color 0.2s;
}
.router-area nav a.router-link-exact-active {
  color: var(--primary-color); /* 激活链接使用主色调 */
}
.router-content {
  background: #eee;
  padding: 20px;
  border-radius: var(--border-radius);
  color: #666;
}
</style>