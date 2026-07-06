<template>
  <section id="projects" class="section-block">
    <div class="section-header">
      <p class="eyebrow-label">
        Featured Work
      </p>

      <h2 class="section-title mt-4">
        Projects
      </h2>

      <p class="body-copy mt-4 max-w-2xl">
        Professional and personal projects showcasing
        full-stack development, UX design, and product ownership.
      </p>
    </div>

    <!-- filters -->

    <div class="mt-8 flex flex-wrap gap-3">
      <!--
        TODO: If additional project filters are added, extract the filtering
        UI into a reusable component and generate the buttons from a typed
        array with v-for.
      -->
      <button 
        :class="getFilterButtonClasses('all')" @click="filterProjects('all')">All</button>
      <button :class="getFilterButtonClasses('professional')" @click="filterProjects('professional')">Professional</button>
      <button :class="getFilterButtonClasses('personal')" @click="filterProjects('personal')">Personal</button>
    </div> 

    <!-- cards -->

    <div class="mt-10 grid gap-6 lg:grid-cols-2">
      <ProjectCard v-for="project in filteredProjects" 
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { Project } from '../types/project';
  import ProjectCard from '../components/projects/ProjectCard.vue';
  import eventOverviewImage from '../assets/images/projects/event-platform/event-overview.png'
  import blankStarterShellImage from '../assets/images/projects/reusable-frontend-platform/blank-starter-shell.png'

  type ProjectFilterType = 'all' | 'professional' | 'personal';
  
  const selectedProjectType = ref<ProjectFilterType>('all');

  
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
const getFilterButtonClasses = (type: ProjectFilterType) => {
  const baseClasses =
    'rounded-lg border border-site-border px-5 py-2.5 text-sm font-medium transition-colors duration-200'

  const activeClasses =
    'bg-brand text-white shadow-glow hover:bg-brand-hover hover:text-white'

  const inactiveClasses =
    'bg-site-surface text-site-muted hover:bg-site-surface2 hover:border-brand hover:text-brand'

  return `${baseClasses} ${
    selectedProjectType.value === type ? activeClasses : inactiveClasses
  }`
}

const filterProjects = (type: ProjectFilterType)  => {
    
    selectedProjectType.value = type
  }

const filteredProjects = computed (() => {

  if (selectedProjectType.value === 'all') {
    return projects;
  }
  return projects.filter(project => project.type === selectedProjectType.value);
})
</script> 
