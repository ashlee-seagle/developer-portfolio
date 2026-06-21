<template>
  <section class="grid gap-10 border-b border-site-border/60 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20">
    <!-- Left: Hero Content -->
    <div class="max-w-3xl">
      <p class="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-site-muted">
        Full-Stack Software Engineer
      </p>

      <h1>
        I build scalable business applications end-to-end.
      </h1>

      <p class="mt-6 max-w-2xl">
         7+ years of web development experience, including 3+ years building full-stack applications, internal business tools, and customer-facing solutions.
      </p>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          class="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-site-bg"
        >
          View My Work
        </a>


      </div>
    </div>

    <!-- Right: Code Card -->
    <div class="rounded-card border border-site-border bg-site-surface/80 p-4 shadow-card backdrop-blur">
      <div class="mb-4 flex gap-2">
        <span class="h-3 w-3 rounded-full bg-status-danger"></span>
        <span class="h-3 w-3 rounded-full bg-status-warning"></span>
        <span class="h-3 w-3 rounded-full bg-status-success"></span>
      </div>

      <pre class="overflow-x-auto rounded-xl bg-site-bg p-5 text-sm leading-7 text-site-muted"><code>export function buildSolutions() {
  return {
    frontend: ['Vue', 'React', 'Tailwind'],
    backend: ['Laravel', 'Node.js', 'REST APIs'],
    database: ['MySQL'],
    focus: 'Clean UI. Solid architecture.'
  }
}</code></pre>
    </div>
  </section>
</template>