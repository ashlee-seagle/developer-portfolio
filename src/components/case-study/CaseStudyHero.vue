<template>
  <section class="border-b border-site-border/60 pb-14">
    <div class="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p class="eyebrow-label">
          {{ eyebrow }}
        </p>

        <h1 class="page-title mt-3">
          {{ title }}
        </h1>

        <p class="lead-copy mt-5">
          {{ description }}
        </p>

        <dl
          v-if="metadata?.length"
          class="mt-5 grid gap-3 sm:grid-cols-2"
        >
          <div
            v-for="item in metadata"
            :key="item.label"
          >
            <dt class="text-xs font-semibold uppercase tracking-[0.16em] text-site-muted/80">
              {{ item.label }}
            </dt>
            <dd class="mt-1 text-sm font-medium text-site-text">
              {{ item.value }}
            </dd>
          </div>
        </dl>

        <div class="mt-7 flex flex-wrap gap-x-2 gap-y-3">
          <span
            v-for="tech in technologies"
            :key="tech"
            class="rounded-md bg-white/5 px-3 py-1.5 text-sm text-site-muted ring-1 ring-site-border transition-colors duration-200 hover:bg-white/10 hover:text-site-text"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <div class="lg:pl-8">
        <div class="rounded-card border border-site-border/60 bg-site-surface/80 p-3 shadow-card sm:p-4">
        <ScreenshotPlaceholder
          :label="screenshotLabel"
          :src="screenshotSrc"
          :alt="screenshotAlt"
        />

        <p class="caption-copy mt-3 px-1">
          {{ screenshotCaption }}
        </p>
      </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import ScreenshotPlaceholder from './ScreenshotPlaceholder.vue'

defineProps<{
  eyebrow: string
  title: string
  description: string
  technologies: string[]
  screenshotLabel: string
  screenshotSrc: string
  screenshotAlt: string
  screenshotCaption: string
  metadata?: {
    label: string
    value: string
  }[]
}>()
</script>
