<template>
  <div class="card-surface p-5">
    <p class="caption-copy">
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
