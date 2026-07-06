<template>
  <div class="card-surface px-10 py-8">
    <h3 class="card-title">
      {{ title }}
    </h3>

    <ul class="caption-copy mt-6 space-y-3">
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
