<template>
  <div class="rounded-card border border-site-border bg-site-surface p-6">
    <figure>
      <div class="overflow-hidden rounded-card border border-site-border bg-site-surface2">
        <img
          :src="activeImage.src"
          :alt="activeImage.alt"
          class="w-full transition duration-300 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <figcaption
        v-if="activeImage.caption"
        class="mt-3 text-sm leading-6 text-site-muted"
      >
        {{ activeImage.caption }}
      </figcaption>
    </figure>

    <div class="mt-4 flex flex-wrap gap-3">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        type="button"
        class="rounded-md border px-3 py-2 text-sm transition"
        :class="
          index === activeIndex
            ? 'border-brand bg-brand/10 text-brand'
            : 'border-site-border text-site-muted hover:border-brand/40 hover:text-site-text'
        "
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
  caption?: string
  label?: string
}

const props = defineProps<{
  images: GalleryImage[]
}>()

const activeIndex = ref(0)

const activeImage = computed(() => props.images[activeIndex.value] ?? props.images[0])
</script>