<template>
  <section id="skills" class="section-block border-t border-site-border/60">
    <div class="section-header max-w-3xl">
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
        class="card-surface px-7 py-5 transition-colors duration-200 hover:bg-site-surface/80"
      >
        <div class="flex items-center gap-3">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-xs font-semibold text-brand ring-1 ring-site-border">
            {{ group.icon }}
          </span>

          <div>
            <h3 class="card-title">
              {{ group.title }}
            </h3>

            <p class="caption-copy mt-1">
              {{ group.description }}
            </p>
          </div>
        </div>

        <div class="mt-5 flex flex-wrap gap-x-2 gap-y-4">
          <span
            v-for="skill in group.skills"
            :key="skill"
            class="rounded-md bg-white/5 px-3 py-1.5 text-sm text-site-muted ring-1 ring-site-border transition-colors duration-200 hover:bg-white/10 hover:text-site-text"
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
    icon: 'FE',
    description: 'Interfaces, component systems, and responsive UI implementation.',
    skills: ['Vue', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Quasar', 'Tailwind CSS', 'React'],
  },
  {
    title: 'Backend',
    icon: 'BE',
    description: 'APIs, application logic, and Laravel-based business workflows.',
    skills: ['Laravel', 'PHP', 'REST APIs', 'Eloquent ORM', 'Node.js'],
  },
  {
    title: 'Databases',
    icon: 'DB',
    description: 'Relational data modeling, querying, and reporting support.',
    skills: ['SQL Server', 'MySQL', 'SQL'],
  },
  {
    title: 'Tools & Workflow',
    icon: 'TW',
    description: 'Project coordination, version control, and development tooling.',
    skills: ['Git', 'GitHub', 'GitHub Projects', 'Agile', 'Vite'],
  },
  {
    title: 'UX & Product',
    icon: 'UX',
    description: 'Workflow design, requirements discovery, and accessible UI decisions.',
    skills: ['UI Implementation', 'Workflow Design', 'Requirements Gathering', 'Accessibility'],
  },
]
</script>
