<template>
  <div>
    <figure>
      <div
  class="flex aspect-video items-center justify-center overflow-hidden rounded-card border border-site-border bg-site-surface2"
>
        <img
          :src="activeImage.src"
          :alt="activeImage.alt"
          class="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    </figure>
    <p
  v-if="activeImage.description"
      class="mt-5 text-sm leading-6 text-site-muted"
>
  {{ activeImage.description }}
</p>

    <div
      class="mt-5 flex flex-wrap gap-2"
  aria-label="Screenshot gallery navigation"
    >
      <button
        v-for="(image, index) in images"
        :key="image.src"
        type="button"
        class="rounded-md border px-3 py-1.5 text-xs font-medium transition-colors duration-200"
        :class="
          index === activeIndex
            ? 'border-brand bg-brand/15 text-brand font-semibold shadow-[0_0_18px_rgba(139,92,246,0.16)]'
            : 'border-site-border text-site-muted hover:border-brand/40 hover:text-site-text'
        "
        :aria-pressed="index === activeIndex"
        @click="activeIndex = index"
      >
        {{ image.label || `Image ${index + 1}` }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

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
</script>