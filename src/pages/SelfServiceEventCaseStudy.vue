<template>
    <div class="mb-8">
    <RouterLink
      :to="{ path: '/', hash: '#projects' }"
      class="inline-flex items-center gap-2 text-sm font-medium text-site-muted transition hover:text-brand"
    >
      ← Back to Projects
    </RouterLink>
  </div>
    
  <article class="space-y-20 py-4">
    <section class="border-b border-site-border/60 pb-16">

  <div class="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
        Professional Case Study
      </p>

      <h1 class="mt-4 text-5xl font-bold tracking-tight text-site-text">
        Self-Service Event Management Platform
      </h1>

      <p class="mt-6 text-lg leading-8 text-site-muted">
        A self-service event management platform designed to streamline event creation,
        registration, attendee management, and communications for professional education programs.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="rounded-md bg-white/5 px-3 py-1.5 text-sm text-site-muted ring-1 ring-site-border"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <div class="rounded-card border border-site-border bg-site-surface/70 p-5 shadow-card">
      <ScreenshotPlaceholder label="Event overview screenshot coming soon" />
    </div>
  </div>

  <div class="mt-10 grid gap-4 sm:grid-cols-3">
    <InfoCard label="Role" value="Lead Full-Stack Developer" />
    <InfoCard label="Status" value="Pre-release" />
    <InfoCard label="Type" value="Professional Project" />
  </div>
</section>

    <CaseStudySection title="Project Overview">
      <p>
        The platform was created to replace a developer-driven process for creating and
        managing educational events. Previously, launching a new event required the
        development team to create new sites, copy and modify legacy code, update
        content, send repeated test emails, and manually trigger invitation emails.
      </p>

      <p>
        I proposed a self-service platform that would allow administrators to manage
        the event lifecycle independently, reducing repetitive developer maintenance
        and giving event coordinators more ownership over their workflows.
      </p>
    </CaseStudySection>

    <CaseStudySection title="My Role">
      <div class="grid gap-4 md:grid-cols-2">
        <BulletCard title="Requirements & Discovery" :items="[
          'Identified repetitive developer-driven workflows',
          'Gathered requirements from stakeholders',
          'Iterated based on stakeholder and management feedback',
        ]" />

        <BulletCard title="System Design" :items="[
          'Designed the relational database schema',
          'Planned application architecture',
          'Structured reusable APIs and frontend workflows',
        ]" />

        <BulletCard title="Full-Stack Development" :items="[
          'Built Laravel REST APIs',
          'Built Vue 3 + Quasar frontend workflows',
          'Implemented event, attendee, email, and reporting features',
        ]" />

        <BulletCard title="Testing & Release Prep" :items="[
          'Performed end-to-end workflow testing',
          'Refined features through feedback',
          'Prepared the platform for release',
        ]" />
      </div>
    </CaseStudySection>

    
    <section class="grid gap-6 lg:grid-cols-2">
  <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
      Challenge
    </p>

    <h2 class="mt-3 text-2xl font-bold text-site-text">
      Developer-dependent event setup created a bottleneck.
    </h2>

    <p class="mt-4 leading-8 text-site-muted">
      The previous process required developers to create new event sites,
      copy and modify legacy code, update content, send repeated test emails,
      and manually trigger invitations.
    </p>
     <!-- <p>
        The previous process created a bottleneck for both developers and event coordinators.
        Developers were spending time on repetitive event setup and content maintenance,
        while administrators remained dependent on engineering resources for routine updates.
      </p> -->
  </div>

  <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
      Solution
    </p>

    <h2 class="mt-3 text-2xl font-bold text-site-text">
      A self-service platform for administrators.
    </h2>

    <p class="mt-4 leading-8 text-site-muted">
      The platform centralizes event setup, registration, attendee management,
      email communications, recurring events, and reporting into one guided
      administrative experience.
    </p>
    <!-- <p>
        The platform centralizes event setup, registration, attendee management, recurring
        events, email communications, and reporting into a guided administrative interface.
        Instead of submitting repeated requests to developers, event staff can configure and
        manage event workflows directly.
      </p> -->
  </div>
</section>

    <CaseStudySection title="Feature Highlights">
      <div class="grid gap-8">
        <FeatureBlock title="Event Dashboard" description="Centralized visibility into event setup, registration metrics, invitations, email activity, and event status." />
        <FeatureBlock title="Attendee Management" description="Tools for importing attendees, tracking invitations, managing registrations, and monitoring participation." />
        <FeatureBlock title="Email Management" description="Template-based communication tools for invitations, confirmations, reminders, and previews." />
        <FeatureBlock title="Recurring Events" description="Configurable recurrence workflows that support repeated event scheduling and occurrence management." />
      </div>
    </CaseStudySection>

    <CaseStudySection title="Technical Challenges">
      <div class="grid gap-4 md:grid-cols-2">
        <BulletCard title="Flexible Data Modeling" :items="[
          'Supported multiple event types and relationships',
          'Designed schema for configurable registration workflows',
          'Balanced flexibility with maintainability',
        ]" />

        <BulletCard title="Workflow Complexity" :items="[
          'Converted manual event processes into guided user flows',
          'Handled draft, registration, attendee, and email states',
          'Designed workflows for non-technical administrators',
        ]" />
      </div>
    </CaseStudySection>

    <CaseStudySection title="Outcomes">
      <ul class="grid gap-3 text-site-muted sm:grid-cols-2">
        <li v-for="outcome in outcomes" :key="outcome" class="rounded-card border border-site-border bg-site-surface/70 p-4">
          {{ outcome }}
        </li>
      </ul>
    </CaseStudySection>

    <CaseStudySection title="Lessons Learned">
      <p>
        This project reinforced the value of understanding business workflows before designing
        technical solutions. The biggest opportunity was not simply building another event tool,
        but identifying which responsibilities could move out of the development queue and into
        a self-service administrative experience.
      </p>
    </CaseStudySection>
  </article>
</template>

<script setup lang="ts">

import InfoCard from '../components/case-study/InfoCard.vue'
import CaseStudySection from '../components/case-study/CaseStudySection.vue'
import BulletCard from '../components/case-study/BulletCard.vue'
import ScreenshotPlaceholder from '../components/case-study/ScreenshotPlaceholder.vue'
import FeatureBlock from '../components/case-study/FeatureBlock.vue'

const technologies = ['Laravel', 'Vue 3', 'Quasar', 'SQL Server', 'REST APIs']

const outcomes = [
  'Reduced repetitive developer maintenance',
  'Empowered administrators to manage events independently',
  'Centralized event workflows into one platform',
  'Created a scalable foundation for future event features',
]
</script>