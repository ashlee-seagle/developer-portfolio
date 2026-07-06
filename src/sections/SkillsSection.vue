<template>
  <section id="skills" class="section-block border-t border-site-border/60">
    <div class="section-header">
      <p class="eyebrow-label">
        Skills
      </p>

      <h2 class="section-title mt-4">
        Technologies I use to build practical, maintainable software.
      </h2>

      <p class="body-copy mt-4">
        My work spans frontend development, backend APIs, databases, UX implementation,
        and internal tooling.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="group in skillGroups"
        :key="group.title"
        class="card-surface p-6"
      >
        <h3 class="card-title">
          {{ group.title }}
        </h3>

        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="skill in group.skills"
            :key="skill"
            class="rounded-md bg-white/5 px-3 py-1.5 text-sm text-site-muted ring-1 ring-site-border"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skillGroups = [
  {
    title: 'Frontend',
    skills: ['Vue', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Quasar'],
  },
  {
    title: 'Backend',
    skills: ['Laravel', 'PHP', 'REST APIs', 'Node.js'],
  },
  {
    title: 'Databases',
    skills: ['SQL Server', 'MySQL'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'GitHub Projects', 'Agile', 'Vite'],
  },
  {
    title: 'UX & Product',
    skills: ['UI Implementation', 'Workflow Design', 'Requirements Gathering', 'Accessibility'],
  },
]
</script>
