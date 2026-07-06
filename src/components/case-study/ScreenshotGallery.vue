<template>
  <div v-if="activeImage" class="space-y-4">
    <button
      type="button"
      class="group block w-full cursor-zoom-in overflow-hidden border border-site-border bg-site-bg text-left"
      @click="isLightboxOpen = true"
    >
      <img
        :src="activeImage.src"
        :alt="activeImage.alt"
        class="w-full"
      />
    </button>

    <p
      v-if="activeImage.description"
      class="caption-copy"
    >
      {{ activeImage.description }}
    </p>

    <div class="flex flex-wrap gap-2">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        type="button"
        class="rounded-md px-3 py-1.5 text-sm font-medium transition"
        :class="
          activeIndex === index
            ? 'bg-brand text-white'
            : 'bg-white/5 text-site-muted hover:bg-white/10 hover:text-site-text'
        "
        @click="activeIndex = index"
      >
        {{ image.label }}
      </button>
    </div>

    <ScreenshotLightbox
  v-if="isLightboxOpen"
  :image-src="activeImage.src"
  :image-alt="activeImage.alt"
  :caption="activeImage.description"
  :show-navigation="images.length > 1"
  @close="isLightboxOpen = false"
  @previous="showPreviousImage"
  @next="showNextImage"
/>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ScreenshotLightbox from './ScreenshotLightbox.vue'

interface GalleryImage {
  src: string
  alt: string
  label?: string
  description?: string
}

const props = defineProps<{
  images: GalleryImage[]
}>()

const activeIndex = ref(0)

const activeImage = computed(() => {
  return props.images[activeIndex.value] ?? props.images[0]
})
const isLightboxOpen = ref(false)

const showPreviousImage = () => {
  activeIndex.value =
    activeIndex.value === 0 ? props.images.length - 1 : activeIndex.value - 1
}

const showNextImage = () => {
  activeIndex.value =
    activeIndex.value === props.images.length - 1 ? 0 : activeIndex.value + 1
}
</script> 
