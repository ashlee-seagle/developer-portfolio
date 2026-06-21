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

          <button class="rounded-lg border border-site-border px-3 py-2 text-sm md:hidden">
            Menu
          </button>
        </nav>
      </header>

</template>

<script setup lang="ts">
    import NavigationMenu from './NavigationMenu.vue';
</script>