<script setup lang="ts">
interface Props {
  type: 'raw' | 'wiki'
  relatedPath: string
}

defineProps<Props>()
</script>

<template>
  <div class="link-to-related">
    <div class="link-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    </div>
    <div class="link-content">
      <template v-if="type === 'raw'">
        <span class="link-label">本文是原始资料</span>
        <a :href="relatedPath">查看 Wiki 解读版</a>
      </template>
      <template v-else>
        <span class="link-label">本文是 Wiki 解读</span>
        <a :href="relatedPath">查看原始资料</a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.link-to-related {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.link-icon {
  flex-shrink: 0;
  color: var(--vp-c-brand-1);
}

.link-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.link-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.link-to-related a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
}

.link-to-related a:hover {
  text-decoration: underline;
}
</style>
