<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      @click.self="emit('close')"
    >
    <button
    v-if="showNavigation"
    type="button"
    class="fixed left-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-site-border bg-site-surface/95 px-4 py-3 text-lg text-site-text shadow-card transition hover:border-brand hover:text-brand"  aria-label="Previous screenshot"
    @click.stop="emit('previous')"
>
  ❮
</button>

        <button
    v-if="showNavigation"
    type="button"
    class="fixed right-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-site-border bg-site-surface/95 px-4 py-3 text-lg text-site-text shadow-card transition hover:border-brand hover:text-brand"  aria-label="Next screenshot"
    @click.stop="emit('next')"
>
  ❯
</button>
      <div class="relative max-h-[90vh] max-w-[92vw]">
        <button
          type="button"
          class="absolute -right-3 -top-3 z-20 rounded-full border border-site-border bg-site-surface px-3 py-1.5 text-sm font-semibold text-site-text shadow-card transition hover:border-brand hover:text-brand"
          aria-label="Close enlarged screenshot"
          @click="emit('close')"
        >
          ✕
        </button>

       

        <img
          :src="props.imageSrc"
          :alt="props.imageAlt"
          class="max-h-[85vh] max-w-[92vw] cursor-auto border border-site-border object-contain shadow-card"
        />

        <p
          v-if="props.caption"
          class="mt-3 max-w-4xl text-center text-sm leading-6 text-site-muted"
        >
          {{ props.caption }}
        </p>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

const props = defineProps<{
  imageSrc: string
  imageAlt: string
  caption?: string
  showNavigation?: boolean
}>()

const emit = defineEmits<{
  close: []
  previous: []
  next: []
}>()

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'Escape':
      emit('close')
      break

    case 'ArrowLeft':
      if (props.showNavigation) {
        emit('previous')
      }
      break

    case 'ArrowRight':
      if (props.showNavigation) {
        emit('next')
      }
      break
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>