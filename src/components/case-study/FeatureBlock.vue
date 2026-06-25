<template>
  <div class="grid gap-5 rounded-card border border-site-border bg-site-surface/70 p-6 lg:grid-cols-[0.9fr_1.1fr]">
    <ScreenshotPlaceholder :label="`${title} screenshot placeholder`" />

    <div>
      <h3 class="text-xl font-semibold text-site-text">
        {{ title }}
      </h3>

      <p class="mt-3 text-sm leading-6 text-site-muted">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScreenshotPlaceholder from './ScreenshotPlaceholder.vue'

defineProps<{
  title: string
  description: string
}>()
</script>