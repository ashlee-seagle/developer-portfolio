<template>
  <div class="rounded-card border border-site-border bg-site-surface/70 p-5">
    <p class="text-sm text-site-muted">
      {{ label }}
    </p>

    <p class="mt-2 font-semibold text-site-text">
      {{ value }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>