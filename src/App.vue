<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-site-bg text-site-text font-sans">
    <div class="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_30%)]" />

    <div class="relative">
      <header class="sticky top-0 z-50 border-b border-site-border/60 bg-site-bg/80 backdrop-blur-xl">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" class="flex items-center gap-3 font-semibold">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
              A
            </div>
            <span>Ashlee Seagle</span>
          </a>

          <div class="hidden items-center gap-8 text-sm text-site-muted md:flex">
            <a href="#projects" class="hover:text-site-text">Projects</a>
            <a href="#skills" class="hover:text-site-text">Skills</a>
            <a href="#experience" class="hover:text-site-text">Experience</a>
            <a href="#about" class="hover:text-site-text">About</a>
            <a href="#contact" class="hover:text-site-text">Contact</a>
          </div>

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

      <main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <HeroSection />
      </main>

      <footer class="border-t border-site-border/60">
        <div class="mx-auto max-w-7xl px-4 py-8 text-sm text-site-muted sm:px-6 lg:px-8">
          © 2026 Ashlee Seagle. All rights reserved.
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from './sections/HeroSection.vue'
</script>
