<template>
    <div :class="[
            'overflow-hidden bg-site-surface2',
            src ? '' : 'rounded-card border border-dashed border-site-border',
            ]"
        >
            <img
            v-if="src"
            :src="src"
            :alt="alt"
            loading="lazy"
            class="w-full h-auto"
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