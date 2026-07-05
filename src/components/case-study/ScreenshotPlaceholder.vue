<template>
  <div>
    <button
      v-if="src"
      type="button"
      class="group/image block w-full cursor-zoom-in overflow-hidden border border-site-border bg-site-bg text-left"
      @click="isLightboxOpen = true"
    >
      <img
        :src="src"
        :alt="alt || label"
        class="w-full"
      />
    </button>

    <div
      v-else
      class="flex aspect-video items-center justify-center rounded-xl border border-dashed border-site-border bg-site-bg text-sm text-site-muted"
    >
      {{ label }}
    </div>

    <ScreenshotLightbox
      v-if="isLightboxOpen && src"
      :image-src="src"
      :image-alt="alt || label"
      @close="isLightboxOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ScreenshotLightbox from './ScreenshotLightbox.vue'
defineProps<{
  label: string,
  src?: string,
  alt?: string,
}>()

const isLightboxOpen = ref(false)
</script>