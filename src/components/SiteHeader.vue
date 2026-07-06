<template>
    <header class="sticky top-0 z-50 border-b border-site-border/60 bg-site-bg/80 backdrop-blur-xl">
        <nav  aria-label="Primary navigation" class="site-container flex items-center justify-between py-4">
          <RouterLink
  to="/"
  class="flex items-center gap-3 font-semibold"
>
  <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
    A
  </div>
  <span>Ashlee Seagle</span>
</RouterLink>

          <NavigationMenu />

          <a
            href="#contact"
            class="hidden rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-glow transition hover:bg-brand-hover md:inline-flex"
          >
            Let’s Connect
          </a>

          <button
                type="button"
                class="flex h-10 w-10 items-center justify-center rounded-lg border border-site-border md:hidden"
                aria-label="Toggle navigation menu"
                aria-controls="mobile-navigation"
                :aria-expanded="isMobileMenuOpen"
                @click="toggleMobileMenu"
            >
            {{ isMobileMenuOpen ? '✕' : '☰' }}
        </button>
        </nav>
        <div
            v-if="isMobileMenuOpen"
            id="mobile-navigation"
            class="border-t border-site-border bg-site-bg md:hidden"
        >
            <div class="site-container flex flex-col gap-3 py-4 text-sm text-site-muted">
                
                <RouterLink
                v-for="item in navItems"
                :key="item.label"
                :to="item.to"
                class="transition hover:text-site-text"
                :class="isActiveNavItem(item.to) ? 'text-brand' : 'text-site-muted'"
                @click="closeMobileMenu"
                >
                {{ item.label }}
                </RouterLink>
            </div>
        </div>
      </header>

</template>

<script setup lang="ts">
    import { navItems } from '../data/navigation'
    import NavigationMenu from './NavigationMenu.vue';
    import { ref } from 'vue';
    import { useRoute } from 'vue-router'

    const isMobileMenuOpen = ref(false)
    const route = useRoute()

    const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    }

    const isActiveNavItem = (to: { path: string; hash?: string }) => {
    return route.path === to.path && route.hash === to.hash
    }
</script>
