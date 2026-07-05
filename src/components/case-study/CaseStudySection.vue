<template>
  <section class="grid gap-8 border-b border-site-border/60 pb-16 lg:grid-cols-[0.35fr_0.65fr]">
    <div :class="titleAlign === 'center' ? 'self-center' : 'self-start'">
      <h2 class="text-2xl font-bold tracking-tight text-site-text">
        {{ title }}
      </h2>
    </div>

    <div class="space-y-5 text-base leading-8 text-site-muted">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    titleAlign?: 'start' | 'center'
  }>(),
  {
    titleAlign: 'center',
  }
)
</script>