<template>
  <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
    <h3 class="font-semibold text-site-text">
      {{ title }}
    </h3>

    <ul class="mt-4 space-y-2 text-sm leading-6 text-site-muted">
      <li
        v-for="item in items"
        :key="item"
        class="flex gap-2"
      >
        <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  items: string[]
}>()
</script>