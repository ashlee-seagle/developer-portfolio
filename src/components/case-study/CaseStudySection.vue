<template>
  <section class="grid gap-8 border-b border-site-border/60 pb-16 lg:grid-cols-[0.35fr_0.65fr]">
    <div :class="titleAlign === 'center' ? 'self-center' : 'self-start'">
      <h2 class="subsection-title">
        {{ title }}
      </h2>
    </div>

    <div class="body-copy space-y-5">
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
