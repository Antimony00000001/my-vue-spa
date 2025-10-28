<script setup>
import { ref } from 'vue'

// --- 1. 个人简介数据 ---
const profile = ref({
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
        <div class="avatar">{{ profile.name.charAt(0) }}</div>
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

    </div>
  </div>
</template>

<style scoped>
/* CSS 变量定义 */
.page-wrapper {
  --b3-theme-background: #f1f0f0; /* Editor Background */
  --Sv--dialog-container: #e2e1e1; /* Dialogs and Containers */
  --Sv-plugin-off-bg: #d0cfcf; /* Inactive Plugin/UI Elements */
  --Sv-tab-inactive: #d4d3d3; /* Inactive tab bar items */

  --primary-color: #A9B7C6; /* A soft, desaturated blue-grey for primary elements */
  --accent-color: #8D9CA9; /* A slightly darker shade for accent */
  --text-color: #2C3E50; /* Darker text for better contrast */
  --text-secondary: #7F8C8D; /* Softer grey for secondary text */
  --bg-color: var(--b3-theme-background); /* Use editor background as main page background */
  --card-bg: var(--Sv--dialog-container); /* Use dialog container for card background */
  --shadow: 0 6px 20px rgba(0, 0, 0, 0.08); /* More pronounced but still subtle shadow */
  --border-radius: 16px; /* Larger border-radius for a softer, modern look */

  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* Modern font stack with Inter as primary */
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
}

.content-container {
  max-width: 1024px; /* Slightly wider content area for a more open feel */
  margin: 0 auto;
  padding: 80px 40px; /* Increased padding for more breathing room */
  box-sizing: border-box;
}

h1, h2, h3 {
  color: var(--text-color); /* Use text-color for headings */
  font-weight: 700; /* Bolder headings */
  line-height: 1.2;
}
h2.section-title {
  font-size: 2.5rem; /* Larger section titles */
  text-align: center;
  margin-top: 100px; /* Increased module spacing */
  margin-bottom: 50px;
  position: relative;
}
h2.section-title::after {
  content: '';
  display: block;
  width: 80px; /* Longer separator */
  height: 4px; /* Thicker separator */
  background-color: var(--primary-color);
  margin: 20px auto 0;
  border-radius: 2px;
}
p {
  line-height: 1.8; /* Increased line-height for readability */
  color: var(--text-secondary); /* Use text-secondary for paragraphs */
  font-size: 1.1rem;
}

.profile {
  text-align: center;
  margin-bottom: 100px; /* Increased module spacing */
  padding-top: 40px; /* Add some padding to the top of the profile section */
}
.avatar {
  width: 180px; /* Larger avatar */
  height: 180px;
  border-radius: 50%;
  background-color: var(--primary-color); /* Use primary color for background */
  color: white; /* White text for contrast */
  font-size: 4rem; /* Large font size for initial */
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 25px; /* Center and add bottom margin */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12); /* More pronounced and softer shadow */
  border: none; /* Remove border as it's now a solid color */
}
.profile h1 {
  font-size: 3.8rem; /* Larger, more impactful name */
  margin: 25px 0 10px;
  letter-spacing: -0.04em; /* Tighter letter spacing for titles */
  color: var(--text-color);
}
.profile .tagline {
  font-size: 1.4rem;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 500;
}
.profile .bio {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 30px auto 0;
  color: var(--text-secondary);
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Adjusted minmax for project cards */
  gap: 40px; /* Increased gap for more separation */
}
.project-card {
  background: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 35px; /* Increased padding */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-align: left;
  display: flex; /* Use flexbox for internal layout */
  flex-direction: column;
  justify-content: space-between; /* Push links to the bottom */
}
.project-card:hover {
  transform: translateY(-10px); /* More noticeable lift on hover */
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15); /* Stronger, more diffused shadow on hover */
}
.project-card h3 {
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 15px;
  color: var(--primary-color);
}
.project-card p {
  margin-bottom: 25px;
  color: var(--text-secondary);
  flex-grow: 1; /* Allow description to take available space */
}
.project-links {
  margin-top: 20px; /* Space above links */
}
.project-links a {
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 600;
  margin-right: 25px; /* Increased spacing between links */
  transition: color 0.2s;
  position: relative;
  padding-bottom: 5px; /* More space for the underline effect */
}
.project-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 3px; /* Thicker underline */
  background-color: var(--accent-color); /* Use accent color for underline */
  transition: width 0.3s ease-out;
}
.project-links a:hover::after {
  width: 100%;
}
.project-links a:hover {
  color: var(--accent-color); /* Change color on hover */
}

.socials {
  text-align: center;
  margin-top: 100px; /* Consistent module spacing */
  margin-bottom: 100px;
}
.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px; /* Increased icon spacing */
}
.social-link {
  color: var(--text-secondary);
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.social-link:hover {
  color: var(--primary-color); /* Use primary color on hover */
  transform: scale(1.3); /* More pronounced scale on hover */
}
.social-link svg {
  display: block;
  width: 40px; /* Larger icons */
  height: 40px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .content-container {
    padding: 60px 25px;
  }
  .profile h1 {
    font-size: 3rem;
  }
  .profile .tagline {
    font-size: 1.2rem;
  }
  .profile .bio {
    font-size: 1.1rem;
  }
  h2.section-title {
    font-size: 2rem;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  .project-card {
    padding: 30px;
  }
  .project-card h3 {
    font-size: 1.4rem;
  }
  .social-icons {
    gap: 35px;
  }
  .social-link svg {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 480px) {
  .content-container {
    padding: 40px 20px;
  }
  .profile h1 {
    font-size: 2.5rem;
  }
  .avatar {
    width: 140px;
    height: 140px;
  }
  .profile .bio {
    max-width: 95%;
    font-size: 1rem;
  }
  h2.section-title {
    font-size: 1.8rem;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  .project-grid {
    grid-template-columns: 1fr;
  }
  .social-icons {
    gap: 25px;
  }
  .social-link svg {
    width: 30px;
    height: 30px;
  }
}
</style>