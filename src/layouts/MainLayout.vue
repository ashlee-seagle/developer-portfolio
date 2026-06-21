<template>
    <div class="min-h-screen bg-site-bg text-site-text font-sans">
    <div class="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_30%)]" />

    <div class="relative">
      <SiteHeader />
      <main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <slot />
      </main>

      <SiteFooter></SiteFooter>
    </div>
  </div>
    
</template>

<script setup lang="ts">
import SiteHeader from '../components/SiteHeader.vue';
import SiteFooter from '../components/SiteFooter.vue';

</script>
