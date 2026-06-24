<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue';
import AboutSection from './sections/AboutSection.vue';
import ContactSection from './sections/ContactSection.vue';
import HeroSection from './sections/HeroSection.vue';
import ProjectSection from './sections/ProjectSection.vue';
import SkillsSection from './sections/SkillsSection.vue';
</script>

<template>
  <MainLayout>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
  </MainLayout>
</template>