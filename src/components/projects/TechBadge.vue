// TODO: Add optional technology icon support via technology-to-icon mapping.
<template>
  <span class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-site-muted ring-1 ring-site-border">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>