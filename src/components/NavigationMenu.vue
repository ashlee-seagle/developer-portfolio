
<template>
  <div class="hidden items-center gap-8 text-sm text-site-muted md:flex">
    <RouterLink
      v-for="item in navItems"
      :key="item.label"
      :to="item.to"
      class="transition hover:text-site-text"
    >
      {{ item.label }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
    import { navItems } from '../data/navigation'
</script>