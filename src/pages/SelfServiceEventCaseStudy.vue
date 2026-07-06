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
        <p class="eyebrow-label">
          Professional Case Study
        </p>

        <h1 class="page-title mt-4">
          Self-Service Event Management Platform
        </h1>

        <p class="lead-copy mt-6">
          A self-service event management platform that centralizes event creation,
          registration, attendee management, recurring scheduling, reporting, and
          communications through a single administrative experience.
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

      <div class="card-surface p-5 shadow-card">
        <ScreenshotPlaceholder
            label="Event Overview Page"
            :src="eventOverviewImage"
          alt="Administrative workspace showing event details, upcoming events, setup progress, and management actions"
        />
        <p class="caption-copy mt-4">
          A centralized administrative workspace provides quick access to event
          management, attendee workflows, communications, and reporting from a
          single application.
        </p>
      </div>
    </div>
  </section>

  <CaseStudySection title="Project Overview">
    <p>
      The platform was created to replace a developer-driven event management process. Previously, launching a new event required developers to create new sites, copy and modify legacy code, import attendee data, update content, send repeated test emails, and manually trigger invitation emails.
    </p>

    <p>
      To address these challenges, I proposed and built a self-service platform that allows administrators to create and manage the complete event lifecycle independently. The platform centralizes event setup, registration, attendee management, recurring scheduling, email communications, and reporting into a guided administrative experience, reducing repetitive developer work while giving event coordinators greater ownership of their workflows.
    </p>
    

<RouterLink
  to="/projects/reusable-frontend-platform"
  class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition hover:opacity-80"
>
  Learn more about the Reusable Frontend Platform →
</RouterLink>
  </CaseStudySection>

  <CaseStudySection title="My Role">
    <p>
      As the sole developer, I led the platform from initial concept through release preparation. I partnered with stakeholders to define business requirements, design user workflows, architect the solution, and deliver the application end-to-end. I also refined the experience through iterative feedback, conducted end-to-end testing, and prepared the platform for production deployment.
    </p>
    <div class="grid gap-4 md:grid-cols-2">
      <BulletCard title="Product Strategy & Discovery" :items="[
        'Identified repetitive developer-driven workflows',
        'Gathered requirements from stakeholders',
        'Prioritized features based on business value',
        'Iterated through stakeholder and management feedback',
      ]" />

      <BulletCard title="Solution Architecture" :items="[
        'Designed the relational database schema',
        'Planned application architecture',
        'Structured reusable APIs and frontend workflows',
        'Established technical direction for the platform',
      ]" />

      <BulletCard title="Full-Stack Development" :items="[
        'Built Laravel REST APIs',
        'Developed Vue 3 + Quasar frontend workflows',
        'Implemented event, attendee, email, and reporting features',
        'Integrated reusable frontend platform patterns',
      ]" />

      <BulletCard title="Quality & Delivery" :items="[
        'Performed end-to-end workflow testing',
        'Refined features through feedback',
        'Prepared the platform for release',
        'Supported documentation and handoff planning',
      ]" />
    </div>
  </CaseStudySection>

   <section class="space-y-8 border-b border-site-border/60 pb-16">
  <div class="max-w-3xl">
    <h2 class="subsection-title">
      Feature Highlights
    </h2>

    <p class="lead-copy mt-4">
      Designed for multiple administrative groups, the platform centralizes the
      full event lifecycle — from event setup and registration to attendee
      management, communications, and reporting — into one consistent
      administrative experience.
    </p>
  </div>

  <div class="grid gap-8">
    <FeatureBlock
      title="Event Workspace & Setup Checklist"
      description="A centralized workspace brings event details, recurring schedules, setup progress, and common management actions together so administrators can quickly understand what still needs attention before an event is ready."
      :image-src="eventOverviewExpandedImage"
      image-alt="Event workspace showing event details, recurring occurrences, setup checklist, and management actions."
      image-caption="The setup checklist highlights required and recommended tasks before an event is ready to launch."
      :highlights="[
        'Centralized event workspace',
        'Setup checklist with progress tracking',
        'Recurring schedule management',
        'Quick access to common administrative tasks',
      ]"
    />

    <FeatureBlock
      title="Event Library"
      description="Administrators can browse, search, filter, and manage upcoming and recurring events from a centralized library. Status indicators and quick actions make it easier to locate events and continue work throughout the event lifecycle."
      :image-src="eventsListImage"
      image-alt="Event library showing upcoming and recurring events with search, filters, status indicators, and management actions."
      image-caption="A centralized event library helps administrators organize and manage events throughout their lifecycle."
      :highlights="[
        'Search and filter events',
        'View recurring and upcoming events',
        'Quick access to common actions',
        'Track event status at a glance',
      ]"
    />

    <FeatureBlock
  title="Event Creation & Configuration"
  description="A guided workflow helps administrators create one-time and recurring events, configure registration settings, and prepare events for launch without relying on developers for setup."
  :highlights="[
    'Multi-step event creation',
    'One-time and recurring event support',
    'Registration configuration',
    'Guided setup before publishing',
  ]"
>
  <template #media>
    <ScreenshotGallery :images="newEventWizardImages" />
  </template>
</FeatureBlock>

   <FeatureBlock
  title="Attendee Import Wizard"
  description="Administrators can upload attendee spreadsheets, map columns to application fields, configure registration behavior, and review records before completing the import."
  :highlights="[
    'Spreadsheet upload',
    'Column mapping',
    'Import review step',
    'Reduced manual data entry',
  ]"
>
  <template #media>
    <ScreenshotGallery :images="attendeeImportImages" />
  </template>
</FeatureBlock>

    <FeatureBlock
      title="Attendee Management"
      description="A centralized workspace supports attendee search, filtering, invitation tracking, registration management, imports, exports, reporting, and setup progress throughout the event lifecycle."
      :image-src="attendeeManagement"
      image-alt="Attendee management workspace showing attendee records, registration status, search and filtering tools, import options, and reporting."
      image-caption="Administrators can manage registrations, invitations, attendee records, and reporting from one centralized workspace."
      :highlights="[
        'Invitation and registration tracking',
        'Search and filter attendees',
        'Excel import and export',
        'Reporting and setup progress',
      ]"
    />

    <FeatureBlock
      title="Email Management"
      description="Administrators can create, customize, preview, and manage reusable email templates for invitations, confirmations, reminders, and other event communications."
      :image-src="emailManagement"
      image-alt="Email management workspace showing reusable email templates, scheduling options, and communication tools."
      image-caption="Reusable email templates simplify communication while keeping messaging consistent across events."
      :highlights="[
        'Reusable email templates',
        'Invitation and reminder workflows',
        'Template preview and editing',
        'Consistent communication across events',
      ]"
    />

    <FeatureBlock
      title="Group Dashboard"
      description="The group dashboard gives administrators visibility into event setup progress, registration activity, invitation status, email activity, and overall event readiness."
      :image-src="dashboardImage"
      image-alt="Event dashboard showing setup status, registration metrics, and email activity."
      image-caption="Dashboard metrics help administrators monitor event progress and identify what needs attention."
      :highlights="[
        'Setup progress visibility',
        'Registration and invitation metrics',
        'Email activity tracking',
        'Group-level event monitoring',
      ]"
    />
  </div>
</section>
<CaseStudySection title="Project Impact">
  <div class="grid gap-6 sm:grid-cols-2">

    <div class="card-surface p-6">
      <h3 class="card-title">
  Reduced Developer Maintenance
</h3>

<p class="body-copy mt-3">
  Routine event creation and management shifted from engineering to
  administrative users, reducing repetitive developer involvement.
</p>
    </div>

    <div class="card-surface p-6">
      <h3 class="card-title">
        Empowered Non-Technical Users
      </h3>

      <p class="body-copy mt-3">
        Administrators can independently create, configure, and manage events
        without relying on developers for routine updates.
      </p>
    </div>

    <div class="card-surface p-6">
      <h3 class="card-title">
        Unified Event Management
      </h3>

      <p class="body-copy mt-3">
        Event setup, registration, attendee management, communications, and
        recurring scheduling are managed from one centralized application.
      </p>
    </div>

    <div class="card-surface p-6">
      <h3 class="card-title">
        Built for Future Growth
      </h3>

      <p class="body-copy mt-3">
        The modular architecture supports future enhancements and allows new event capabilities to be added without redesigning the platform.
      </p> 
    </div>

  </div>
</CaseStudySection>

    <CaseStudySection title="Technical Challenges">
  <div class="grid gap-4 md:grid-cols-3">

    <BulletCard
      title="Flexible Data Modeling"
      :items="[
        'Supported multiple event types and relationships',
        'Designed schema for configurable registration workflows',
        'Balanced flexibility with maintainability',
      ]"
    />

    <BulletCard
      title="Workflow Design"
      :items="[
        'Converted manual processes into guided user workflows',
        'Managed draft, registration, attendee, and email states',
        'Designed intuitive experiences for non-technical users',
      ]"
    />

    <BulletCard
      title="Reusable Platform"
      :items="[
        'Built on a shared Vue/Laravel frontend platform',
        'Created reusable UI patterns and layouts',
        'Reduced setup time for future applications',
      ]"
    />

  </div>
</CaseStudySection>

    
<CaseStudySection title="Related Project">
  <p>
    To accelerate development and improve consistency across projects, this
    application was built on a reusable frontend platform that I designed for
    Vue and Laravel applications. Shared layouts, navigation, theming, and
    reusable UI patterns reduced setup time while creating a consistent
    experience across future applications.
  </p>

  <RouterLink
    :to="{ path: '/projects/reusable-frontend-platform' }"
    class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-hover"
  >
    View Reusable Frontend Platform →
  </RouterLink>
</CaseStudySection>
    <CaseStudySection title="Lessons Learned">
      <p>
        Building this platform reinforced that successful software starts with understanding business workflows rather than immediately designing technical solutions. By identifying which responsibilities truly required developer involvement, and which could be safely delegated, I was able to simplify recurring administrative work while creating a scalable foundation for future event management.
      </p>
    </CaseStudySection>
  </article>
</template>

<script setup lang="ts">

import CaseStudySection from '../components/case-study/CaseStudySection.vue'
import BulletCard from '../components/case-study/BulletCard.vue'
import FeatureBlock from '../components/case-study/FeatureBlock.vue'
import ScreenshotPlaceholder from '../components/case-study/ScreenshotPlaceholder.vue'
import ScreenshotGallery from '../components/case-study/ScreenshotGallery.vue'

import eventOverviewImage from '../assets/images/projects/event-platform/event-overview.png'
import eventOverviewExpandedImage from '../assets/images/projects/event-platform/event-overview-checklist.png'
import eventsListImage from '../assets/images/projects/event-platform/events-list.png'
import attendeeManagement from '../assets/images/projects/event-platform/manage-attendees.png'
import emailManagement from '../assets/images/projects/event-platform/manage-emails.png'
import dashboardImage from '../assets/images/projects/event-platform/dashboard.png'

import newEventStep1Image from '../assets/images/projects/event-platform/event-wizard-step1.png'
import eventCreationReviewImage from '../assets/images/projects/event-platform/event-wizard-step2.png'
import recurrenceBuilderImage from '../assets/images/projects/event-platform/event-wizard-recurrence-builder.png'
import registrationSettingsImage from '../assets/images/projects/event-platform/event-wizard-step3.png'

import attendeeImportUploadImage from '../assets/images/projects/event-platform/import-upload.png'
import attendeeImportMappingImage from '../assets/images/projects/event-platform/import-mapping.png'
import attendeeImportRegistrationImage from '../assets/images/projects/event-platform/import-registration.png'
import attendeeImportReviewImage from '../assets/images/projects/event-platform/import-review.png'


const technologies = ['Laravel', 'Vue 3', 'Quasar', 'SQL Server', 'REST APIs']

const newEventWizardImages = [
  {
    src: newEventStep1Image,
    alt: 'Event creation wizard showing event details and configuration fields.',
    label: 'Event Details',
    description: 'Administrators begin by entering core event details and choosing whether the event is one-time or recurring.',

  },
  {
    src: recurrenceBuilderImage,
    alt: 'Recurring event pattern builder with frequency and end condition options.',
    label: 'Recurrence',
    description: 'Recurring events can be configured with custom frequency, interval, and end conditions.',

  },
  {
    src: eventCreationReviewImage,
    alt: 'Event creation wizard showing generated recurring event instances for review.',
    label: 'Review Dates',
    description: 'Generated recurring event instances can be reviewed and adjusted before the event is published.',

  },
  {
    src: registrationSettingsImage,
    alt: 'Event creation wizard showing registration configuration settings.',
    label: 'Registration',
    description: 'Registration rules, capacity, and attendee settings are configured before finalizing the event.',

  },
  
]

const attendeeImportImages = [
  {
    src: attendeeImportUploadImage,
    alt: 'Attendee import workflow showing file upload step.',
    label: 'Upload File',
    description: 'Administrators begin by uploading a CSV or Excel file containing attendee information.',
  },
  {
    src: attendeeImportMappingImage,
    alt: 'Attendee import workflow showing spreadsheet column mapping.',
    label: 'Map Columns',
    description: 'Spreadsheet columns are mapped to application fields before attendee records are imported.',
  },
  {
    src: attendeeImportRegistrationImage,
    alt: 'Attendee import workflow showing registration configuration options.',
    label: 'Registration',
    description: 'Registration options can be applied during import to control attendee access and registration status.',
  },
  {
    src: attendeeImportReviewImage,
    alt: 'Attendee import workflow showing imported attendee records for review.',
    label: 'Review',
    description: 'Imported attendee records can be reviewed before completing the workflow.',
  },
]
 

</script>
