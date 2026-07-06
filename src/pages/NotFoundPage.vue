<template>
  <section class="section-block flex min-h-[65vh] items-center justify-center text-center">
    <div class="max-w-2xl">
      <p class="eyebrow-label">
        404
      </p>

      <h1 class="page-title mt-4">
        This page wandered off.
      </h1>

      <p class="body-copy mt-5">
        The page you’re looking for doesn’t exist or may have moved. Head back to the homepage to keep exploring my work.
      </p>

      <RouterLink
        to="/"
        class="button-primary mt-8 shadow-glow hover:bg-brand-hover"
      >
        Return Home
      </RouterLink>
    </div>
  </section>
</template>
