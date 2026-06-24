<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue';
import AboutSection from './sections/AboutSection.vue';
import HeroSection from './sections/HeroSection.vue'
import ProjectSection from './sections/ProjectSection.vue'
</script>

<template>
  <MainLayout>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
  </MainLayout>
</template>