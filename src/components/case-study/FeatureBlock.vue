<template>
  <div
    class="group rounded-card border border-site-border bg-site-surface
           transition-all duration-300
           hover:-translate-y-1
           hover:border-brand/40
           hover:shadow-[0_12px_40px_rgba(139,92,246,0.10)]"
  >
    <div class="grid gap-8 p-8 lg:grid-cols-[1.8fr_1fr] lg:items-center">

      <!-- Left column -->
      <div class="">
        <ScreenshotPlaceholder
          :label="`${title} screenshot placeholder`"
          :src="imageSrc"
          :alt="imageAlt"
        />

        <p
          v-if="imageCaption"
          class="mt-3 text-sm leading-6 text-site-muted"
        >
          {{ imageCaption }}
        </p>
      </div>

      <!-- Right column -->
      <div>
        <h3 class="text-xl font-semibold text-site-text">
          {{ title }}
        </h3>

        <p class="mt-3 text-sm leading-6 text-site-muted">
          {{ description }}
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import ScreenshotPlaceholder from './ScreenshotPlaceholder.vue'

defineProps<{
  title: string,
  description: string,
  imageSrc?: string,
  imageAlt?: string,
  imageCaption?: string
}>()
</script>