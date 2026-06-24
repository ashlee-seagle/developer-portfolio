<template>
    <header class="sticky top-0 z-50 border-b border-site-border/60 bg-site-bg/80 backdrop-blur-xl">
        <nav  aria-label="Primary navigation" class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" class="flex items-center gap-3 font-semibold">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
              A
            </div>
            <span>Ashlee Seagle</span>
          </a>

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
            class="border-t border-site-border bg-site-bg px-4 py-4 md:hidden"
        >
            <div class="flex flex-col gap-3 text-sm text-site-muted">
                <a
                    v-for="item in navItems"
                    :key="item.href"
                    :href="item.href"
                    class="hover:text-site-text"
                    @click="closeMobileMenu"
                    >
                    {{ item.label }}
                </a>
            </div>
        </div>
      </header>

</template>

<script setup lang="ts">
    import { navItems } from '../data/navigation'
    import NavigationMenu from './NavigationMenu.vue';
    import { ref } from 'vue';

    const isMobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
    }
</script>