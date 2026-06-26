<template>
  <section class="flex min-h-[65vh] items-center justify-center py-20 text-center">
    <div class="max-w-2xl">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
        404
      </p>

      <h1 class="mt-4 text-4xl font-bold tracking-tight text-site-text sm:text-5xl">
        This page wandered off.
      </h1>

      <p class="mt-5 text-base leading-7 text-site-muted">
        The page you’re looking for doesn’t exist or may have moved. Head back to the homepage to keep exploring my work.
      </p>

      <RouterLink
        to="/"
        class="mt-8 inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:bg-brand-hover"
      >
        Return Home
      </RouterLink>
    </div>
  </section>
</template>