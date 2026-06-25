<template>
  <article class="rounded-card border border-site-border bg-site-surface/80 p-5 shadow-card">
 <div class="mb-5 aspect-video overflow-hidden rounded-xl border border-site-border">
  <img
    v-if="project.image"
    :src="project.image"
    :alt="`${project.title} screenshot`"
    class="h-full w-full object-cover"
  />

  <div
    v-else
    class="flex h-full items-center justify-center bg-site-surface2 text-site-muted"
  >
    Screenshot Coming Soon
  </div>
</div>
    <p class="mb-2 text-xs font-semibold uppercase tracking-wide text-brand">
      {{ project.type }} project
    </p>

    <h3 class="text-2xl font-semibold text-site-text">
      {{ project.title }}
    </h3>

    <p class="mt-3 text-sm leading-6 text-site-muted">
      {{ project.description }}
    </p>

    <div class="mt-5 flex flex-wrap gap-2">
      <TechBadge
        v-for="technology in project.technologies"
        :key="technology"
        :label="technology"
      />
    </div>

    <div class="mt-6 flex flex-wrap gap-4 text-sm font-medium">
      <RouterLink
    v-if="project.caseStudyRoute"
    :to="project.caseStudyRoute"
    class="text-brand hover:text-brand-hover"
  >
    View Case Study →
  </RouterLink>

      <a v-if="project.githubUrl" :href="project.githubUrl" class="text-site-text hover:text-brand">
        GitHub →
      </a>

      <a v-if="project.liveDemoUrl" :href="project.liveDemoUrl" class="text-site-text hover:text-brand">
        Live Demo →
      </a>
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