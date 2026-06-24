<template>
  <section id="skills" class="border-t border-site-border/60 py-20">
    <div class="mb-10 max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
        Skills
      </p>

      <h2 class="mt-3 text-4xl font-bold tracking-tight text-site-text">
        Technologies I use to build practical, maintainable software.
      </h2>

      <p class="mt-4 text-site-muted">
        My work spans frontend development, backend APIs, databases, UX implementation,
        and internal tooling.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="group in skillGroups"
        :key="group.title"
        class="rounded-card border border-site-border bg-site-surface/70 p-6"
      >
        <h3 class="text-lg font-semibold text-site-text">
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