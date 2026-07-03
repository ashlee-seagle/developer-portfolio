<template>
  <article class="group rounded-card border border-site-border bg-site-surface p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div
      class="mb-6 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-lg p-5"
      :class="project.image
        ? 'bg-site-surface2/60'
        : 'border border-site-border bg-site-surface2'
      "
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`${project.title} screenshot`"
        class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      />

      <div
        v-else
        class="flex h-full w-full items-center justify-center text-site-muted"
      >
        Screenshot Coming Soon
      </div>
    </div>

    <div class="px-6 pb-4">
      <p class="mb-6 text-sm font-semibold uppercase tracking-wide text-brand">
        {{ project.type }} project
      </p>

      <h3 class="text-2xl font-semibold text-site-text">
        {{ project.title }}
      </h3>

      <p class="mt-6 text-md min-h-[5rem] leading-6 text-site-muted">
        {{ project.description }}
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <TechBadge
          v-for="technology in project.technologies"
          :key="technology"
          :label="technology"
        />
      </div>

      <div class="mt-6 flex flex-wrap gap-4 text-md font-medium">
        <RouterLink
          v-if="project.caseStudyRoute"
          :to="project.caseStudyRoute"
          class="text-brand transition-colors hover:text-brand-hover"
        >
          View Case Study →
        </RouterLink>

        <a 
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-site-text transition-colors hover:text-brand text-md"
        >
          GitHub →
        </a>

        <a
          v-if="project.liveDemoUrl"
          :href="project.liveDemoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-site-text transition-colors hover:text-brand text-md"
        >
          Live Demo →
        </a>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TechBadge from './TechBadge.vue'
import type { Project } from '../../types/project'

defineProps<{
  project: Project
}>()
</script>