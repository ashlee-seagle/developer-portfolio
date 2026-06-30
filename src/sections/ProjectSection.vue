<template>
  <section id="projects" class="py-16">
    <div class="mb-10">
      <p class="text-sm uppercase tracking-wide text-site-muted">
        Featured Work
      </p>

      <h2 class="mt-2 text-4xl font-bold">
        Projects
      </h2>

      <p class="mt-4 max-w-2xl text-site-muted">
        Professional and personal projects showcasing
        full-stack development, UX design, and product ownership.
      </p>
    </div>

    <!-- filters -->

    <div class="mt-8 flex gap-3">
      <button>All</button>
      <button>Professional</button>
      <button>Personal</button>
    </div>

    <!-- cards -->

    <div class="mt-10 grid gap-6 lg:grid-cols-2">
      <ProjectCard v-for="project in projects" 
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { Project } from '../types/project';
  import ProjectCard from '../components/projects/ProjectCard.vue';
  const projects: Project[] = [
  {
    title: 'Self-service Event Management PLatform',
    type: 'professional',
    description: 'Multi-tenant event management platform...',
    technologies: ['Laravel', 'Vue', 'Quasar'],
    caseStudyRoute: '/projects/self-service-event-management-platform',
  },
  {
  title: 'Reusable Frontend Platform',
  type: 'professional',
  description:
    'An internal frontend platform with reusable layouts, components, and templates that standardized new applications and saved 50+ engineering hours.',
  technologies: ['Laravel', 'Vue 3', 'Quasar', 'Vue Router'],
  caseStudyRoute: '/projects/reusable-frontend-platform',
  },
  {
    title: 'Workout Planner',
    type: 'personal',
    description: 'Workout generation application...',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: '#',
  },
]
</script>