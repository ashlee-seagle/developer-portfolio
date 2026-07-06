// TODO: Add optional technology icon support via technology-to-icon mapping.
<template>
  <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-site-muted ring-1 ring-site-border transition-colors duration-200 hover:bg-white/10 hover:text-site-text">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>