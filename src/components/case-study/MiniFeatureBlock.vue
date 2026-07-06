<template>
  <div
    class="group rounded-card border border-site-border bg-site-surface p-6
           transition-all duration-300
           hover:-translate-y-1
           hover:border-brand/40
           hover:shadow-[0_12px_40px_rgba(139,92,246,0.10)]"
  >
    <div class="overflow-hidden rounded-card border border-site-border bg-site-surface2">
      <img
        v-if="imageSrc"
        :src="imageSrc"
        :alt="imageAlt"
        loading="lazy"
        class="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.015]"
      />

      <div
        v-else
        class="flex aspect-video items-center justify-center text-sm text-site-muted"
      >
        Screenshot coming soon
      </div>
    </div>

    <p
      v-if="imageCaption"
      class="mt-3 text-xs italic leading-5 text-site-muted/80"
    >
      {{ imageCaption }}
    </p>

    <div class="mt-5">
      <h4 class="card-title">
        {{ title }}
      </h4>

      <p class="caption-copy mt-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  imageCaption?: string
}

defineProps<Props>()
</script>
