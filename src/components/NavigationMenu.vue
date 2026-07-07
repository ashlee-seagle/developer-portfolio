
<template>
  <div class="hidden items-center gap-8 text-sm text-site-muted md:flex">
    <RouterLink
      v-for="item in navItems"
      :key="item.label"
      :to="item.to"
      custom
      v-slot="{ href }"
    >
      <a
        :href="href"
        class="transition hover:text-site-text"
        :class="isActiveNavItem(item.to) ? 'text-brand' : 'text-site-muted'"
        @click="navigateToSection(item.to, $event)"
      >
        {{ item.label }}
      </a>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useActiveNavItem } from '../composables/useActiveNavItem'
import { navItems } from '../data/navigation'

const { isActiveNavItem, navigateToSection } = useActiveNavItem()
</script>
