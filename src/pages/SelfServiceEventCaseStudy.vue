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

    <!-- <p class="mt-4 leading-8 text-site-muted">
      The platform centralizes event setup, registration, attendee management,
      email communications, recurring events, and reporting into one guided
      administrative experience.
    </p> -->
    <p class="mt-4 leading-8 text-site-muted">
        The platform centralizes event setup, registration, attendee management, recurring
        events, email communications, and reporting into a guided administrative interface.
        Instead of submitting repeated requests to developers, event staff can configure and
        manage event workflows directly.
      </p>
  </div>
</section>

    <section class="space-y-8 border-b border-site-border/60 pb-16">
  <div class="max-w-3xl">
    <h2 class="text-2xl font-bold tracking-tight text-site-text">
      Feature Highlights
    </h2>

    <p class="mt-4 text-lg leading-8 text-site-muted">
      The platform brings together the entire event lifecycle into a single administrative experience.
      These are some of the key workflows designed to reduce manual effort and empower non-technical users.
    </p>
  </div>

  <div class="grid gap-8">
    <FeatureBlock
      title="Event Overview"
      description="A centralized workspace that brings event details, recurring schedules, setup progress, and common management tasks together in one place, giving administrators everything they need to manage an event efficiently."
      :image-src="eventOverviewImage"
      image-alt="Event overview screen showing event details, recurring occurrences, setup checklist, and management actions"
      image-caption="Centralized event workspace with event details, recurring occurrences, setup checklist, and quick management actions."

      />
    <FeatureBlock
        title="Event Creation & Configuration"
        description="Administrators create events through a guided multi-step workflow that supports both one-time and recurring events. The platform simplifies complex scheduling, automatically generates recurring occurrences, and provides configurable registration settings before an event is published."
        :image-src="eventCreationReviewImage"
        image-alt="Event creation wizard showing generated recurring event instances for review"
        image-caption="Generated recurring event instances can be reviewed and adjusted before the event is published."
    />
    <div class="mt-8 grid gap-6 md:grid-cols-2">

  <MiniFeatureBlock
    title="Flexible Recurrence Rules"
    description="For recurring events, administrators can configure custom recurrence patterns, including frequency, interval, end conditions, and schedule rules without requiring manual creation of each occurrence."
    :image-src="recurrenceBuilderImage"
    image-alt="Recurring event pattern builder"
    image-caption="Configure custom recurrence rules for one-time and repeating events."
  />

  <MiniFeatureBlock
    title="Registration Configuration"
    description="Registration options such as attendee eligibility, capacity limits, credit requirements, and registration windows are configured before the event is finalized, giving administrators complete control over the attendee experience."
    :image-src="registrationSettingsImage"
    image-alt="Registration configuration step"
    image-caption="Registration settings are configured before an event is published."
  />

</div>



    <FeatureBlock title="Attendee Management" description="Tools for importing attendees, tracking invitations, managing registrations, and monitoring participation." />
    <FeatureBlock title="Email Management" description="Template-based communication tools for invitations, confirmations, reminders, and previews." />
    <FeatureBlock title="Recurring Events" description="Configurable recurrence workflows that support repeated event scheduling and occurrence management." />
    <FeatureBlock
      title="Group Dashboard"
      description="Centralized visibility into event setup, registration metrics, invitations, email activity, and event status."
      :image-src="dashboardImage"
      image-alt="Event dashboard showing setup status, registration metrics, and email activity"
    />
</div>
</section>

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

    <CaseStudySection title="Project Impact">
  <div class="grid gap-6 sm:grid-cols-2">

    <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
      <h3 class="text-lg font-semibold text-site-text">
        Reduced Developer Maintenance
      </h3>

      <p class="mt-3 text-site-muted">
        Routine event creation and configuration moved from engineering to
        administrative users, reducing repetitive developer involvement.
      </p>
    </div>

    <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
      <h3 class="text-lg font-semibold text-site-text">
        Empowered Non-Technical Users
      </h3>

      <p class="mt-3 text-site-muted">
        Administrators can independently create, configure, and manage events
        without relying on developers for routine updates.
      </p>
    </div>

    <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
      <h3 class="text-lg font-semibold text-site-text">
        Unified Event Management
      </h3>

      <p class="mt-3 text-site-muted">
        Event setup, registration, attendee management, communications, and
        recurring scheduling are managed from one centralized application.
      </p>
    </div>

    <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
      <h3 class="text-lg font-semibold text-site-text">
        Built for Future Growth
      </h3>

      <p class="mt-3 text-site-muted">
        A modular architecture and reusable workflows provide a scalable
        foundation for future enhancements and organizational adoption.
      </p>
    </div>

  </div>
</CaseStudySection>
    <CaseStudySection title="Lessons Learned">
      <p>
        Building this platform reinforced that successful software starts with understanding business workflows rather than immediately designing technical solutions. By identifying which responsibilities truly required developer involvement, and which could be safely delegated, I was able to simplify recurring administrative work while creating a scalable foundation for future event management.
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
import MiniFeatureBlock from '../components/case-study/MiniFeatureBlock.vue'

import dashboardImage from '../assets/images/projects/event-platform/dashboard.png'
import eventOverviewImage from '../assets/images/projects/event-platform/event-overview.png'
import eventCreationReviewImage from '../assets/images/projects/event-platform/event-wizard-step2.png'
import recurrenceBuilderImage from '../assets/images/projects/event-platform/event-wizard-recurrence-builder.png'
import registrationSettingsImage from '../assets/images/projects/event-platform/event-wizard-step3.png'


const technologies = ['Laravel', 'Vue 3', 'Quasar', 'SQL Server', 'REST APIs']


</script>