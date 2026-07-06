<template>
  <div
    class="group rounded-card border border-site-border bg-site-surface
           transition-all duration-300
          hover:border-brand/40
           hover:shadow-[0_12px_40px_rgba(139,92,246,0.10)]"
  >
    <div class="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.45fr_1fr] lg:items-start lg:p-12">
      <div>
        <slot name="media">
          <ScreenshotPlaceholder
            :label="`${title} screenshot placeholder`"
            :src="imageSrc"
            :alt="imageAlt"
          />

          <p
            v-if="imageCaption"
            class="caption-copy mt-4"
          >
            {{ imageCaption }}
          </p>
        </slot>
      </div>

      <div>
        <h3 class="card-title">
          {{ title }}
        </h3>

        <p class="caption-copy mt-6">
          {{ description }}
        </p>

        <ul
          v-if="highlights?.length"
          class="caption-copy mt-8 space-y-4"
        >
          <li
            v-for="highlight in highlights"
            :key="highlight"
            class="flex gap-2"
          >
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
            <span>{{ highlight }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ScreenshotPlaceholder from './ScreenshotPlaceholder.vue'

defineProps<{
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  imageCaption?: string
  highlights?: string[]
}>()
</script>
