<script setup lang="ts">
import { useData } from 'vitepress'
import { watch, onMounted, ref } from 'vue'

const { isDark } = useData()
const giscusContainer = ref<HTMLElement | null>(null)

// Giscus configuration
// TODO: Replace with your own Giscus configuration from https://giscus.app/
const giscusConfig = {
  repo: 'your-username/your-repo',           // GitHub repository
  repoId: 'your-repo-id',                    // Repository ID
  category: 'Announcements',                 // Discussions category
  categoryId: 'your-category-id',            // Category ID
  mapping: 'pathname',                       // Page mapping
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  theme: 'preferred_color_scheme',
  lang: 'zh-CN',
  loading: 'lazy'
}

function loadGiscus() {
  if (!giscusContainer.value) return

  // Clear existing giscus
  giscusContainer.value.innerHTML = ''

  // Create giscus iframe
  const iframe = document.createElement('iframe')
  iframe.src = `https://giscus.app/client.js?repo=${giscusConfig.repo}&repoId=${giscusConfig.repoId}&category=${giscusConfig.category}&categoryId=${giscusConfig.categoryId}&mapping=${giscusConfig.mapping}&reactionsEnabled=${giscusConfig.reactionsEnabled}&emitMetadata=${giscusConfig.emitMetadata}&inputPosition=${giscusConfig.inputPosition}&theme=${isDark.value ? 'dark' : 'light'}&lang=${giscusConfig.lang}&loading=${giscusConfig.loading}`
  iframe.setAttribute('width', '100%')
  iframe.setAttribute('height', '400')
  iframe.setAttribute('scrolling', 'no')
  iframe.setAttribute('title', 'comments')
  iframe.style.border = 'none'
  iframe.style.marginTop = '1rem'

  giscusContainer.value.appendChild(iframe)
}

onMounted(() => {
  loadGiscus()
})

watch(isDark, () => {
  loadGiscus()
})
</script>

<template>
  <div class="giscus-container">
    <div ref="giscusContainer" class="giscus"></div>
    <p class="giscus-note">
      评论功能需要配置 Giscus。请在 <a href="https://giscus.app/" target="_blank">giscus.app</a> 生成配置并更新 Giscus.vue 中的参数。
    </p>
  </div>
</template>

<style scoped>
.giscus-container {
  margin-top: 2rem;
  padding-top: 1rem;
}

.giscus-note {
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  text-align: center;
  margin-top: 1rem;
}

.giscus-note a {
  color: var(--vp-c-brand-1);
}
</style>
