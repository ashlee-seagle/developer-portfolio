<template>
  <div
    class="flex aspect-video items-center justify-center rounded-card border border-dashed border-site-border bg-site-surface2 text-sm text-site-muted"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>