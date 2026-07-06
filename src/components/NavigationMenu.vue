
<template>
  <div class="hidden items-center gap-8 text-sm text-site-muted md:flex">
    <RouterLink
      v-for="item in navItems"
      :key="item.label"
      :to="item.to"
      class="transition hover:text-site-text"
      :class="isActiveNavItem(item.to) ? 'text-brand' : 'text-site-muted'"
    >
      {{ item.label }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { navItems } from '../data/navigation'

const route = useRoute()

const isActiveNavItem = (to: { path: string; hash?: string }) => {
  return route.path === to.path && route.hash === to.hash
}
</script>
