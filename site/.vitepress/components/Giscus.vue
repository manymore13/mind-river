<script setup lang="ts">
import { useData } from 'vitepress'
import { watch, onMounted, ref } from 'vue'

const { isDark } = useData()
const giscusContainer = ref<HTMLElement | null>(null)

function loadGiscus() {
  if (!giscusContainer.value) return

  // Clear existing giscus
  giscusContainer.value.innerHTML = ''

  // Create giscus script element
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'manymore13/mind-river')
  script.setAttribute('data-repo-id', 'R_kgDOR90hPg')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOR90hPs4C6c0t')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  giscusContainer.value.appendChild(script)
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
  </div>
</template>

<style scoped>
.giscus-container {
  margin-top: 2rem;
  padding-top: 1rem;
}
</style>
