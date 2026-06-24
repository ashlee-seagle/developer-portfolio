
<template>
  <div class="hidden items-center gap-8 text-sm text-site-muted md:flex">
    <a
      v-for="item in navItems"
      :key="item.href"
      :href="item.href"
      class="transition hover:text-site-text focus:outline-none focus:text-site-text"
    >
      {{ item.label }}
    </a>
  </div>
</template>

<script setup lang="ts">
    import { navItems } from '../data/navigation'
</script>