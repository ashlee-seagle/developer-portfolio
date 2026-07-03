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
  import eventOverviewImage from '../assets/images/projects/event-platform/event-overview.png'
  import blankStarterShellImage from '../assets/images/projects/reusable-frontend-platform/blank-starter-shell.png'
  
  const projects: Project[] = [
  {
    title: 'Self-service Event Management Platform',
    type: 'professional',
    description: 'Self-service event platform that streamlines event creation, attendee management, and communications.',
    technologies: ['Laravel', 'Vue', 'Quasar'],
    caseStudyRoute: '/projects/self-service-event-management-platform',
    image: eventOverviewImage,
  },
  {
  title: 'Reusable Front-end Platform',
  type: 'professional',
  description:
    'An internal frontend platform with reusable layouts, components, and templates that standardized new applications and saved 50+ engineering hours.',
  technologies: ['Laravel', 'Vue 3', 'Quasar', 'Vue Router'],
  caseStudyRoute: '/projects/reusable-frontend-platform',
  image: blankStarterShellImage,
  },
  {
    title: 'Plan My Workout',
    type: 'personal',
    description: 'A React application that generates personalized workout plans using AI based on user goals and available equipment.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/ashlee-seagle/workout-planner',
  },
]
</script> 