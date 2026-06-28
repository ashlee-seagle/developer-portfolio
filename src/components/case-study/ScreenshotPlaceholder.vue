<template>
    <div :class="[
            'overflow-hidden rounded-card bg-site-surface2',
            src ? 'border border-site-border' : 'border border-dashed border-site-border',
            ]"
        >
            <img
            v-if="src"
            :src="src"
            :alt="alt"
            loading="lazy"
            class="w-full h-auto transition-transform duration-500 group-hover:scale-[1.015]"
            />

            <div
            v-else
            class="flex aspect-video items-center justify-center px-4 text-center text-sm text-site-muted"
            >
            {{ label }}
            </div>
        </div>

</template>

<script setup lang="ts">
defineProps<{
  label: string,
  src?: string,
  alt?: string,
}>()
</script>