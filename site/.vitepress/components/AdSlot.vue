<script setup lang="ts">
interface Props {
  position: 'sidebar-top' | 'sidebar-bottom' | 'content-bottom' | 'inline'
  class?: string
}

defineProps<Props>()
</script>

<template>
  <div :class="['ad-slot', `ad-slot--${position}`, $props.class]">
    <!-- Google AdSense or other ad code goes here -->
    <!-- Example: <ins class="adsbygoogle" ...></ins> -->
    <div class="ad-placeholder">
      <span>广告位 ({{ position }})</span>
    </div>
  </div>
</template>

<style scoped>
.ad-slot {
  padding: 0.75rem;
  margin: 0.5rem 0;
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  text-align: center;
}

.ad-slot--inline {
  margin: 1.5rem 0;
}

.ad-placeholder {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
}
</style>
