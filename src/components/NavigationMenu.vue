
<template>
  <div class="hidden items-center gap-8 text-sm text-site-muted md:flex">
    <RouterLink
      v-for="item in navItems"
      :key="item.label"
      :to="item.to"
      class="transition hover:text-site-text"
      :class="isActiveNavItem(item.to) ? 'text-brand' : 'text-site-muted'"
      @click="scrollToCurrentHash(item.to)"
    >
      {{ item.label }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useActiveNavItem } from '../composables/useActiveNavItem'
import { navItems } from '../data/navigation'

const { isActiveNavItem, scrollToCurrentHash } = useActiveNavItem()
</script>
