<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Giscus from '../components/Giscus.vue'
import LinkToRelated from '../components/LinkToRelated.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <!-- Content bottom: related links and comments -->
    <template #doc-after>
      <div class="doc-after">
        <!-- Related links -->
        <LinkToRelated
          v-if="frontmatter.wiki || frontmatter.source"
          :type="frontmatter.wiki ? 'raw' : 'wiki'"
          :relatedPath="frontmatter.wiki || frontmatter.source"
        />

        <!-- Giscus comments -->
        <Giscus />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.doc-after {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
