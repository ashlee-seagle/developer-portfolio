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
            Reusable Frontend Platform
          </h1>

          <p class="mt-6 text-lg leading-8 text-site-muted">
            A reusable UI kit and hybrid SPA starter template built to standardize
            Laravel, Vue 3, and Quasar applications while reducing repetitive setup work.
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
        <ScreenshotPlaceholder
            label="Blank starter application shell"
            :src="blankStarterShell"
            alt="Blank reusable frontend platform starter shell with placeholder app name, welcome message, and ready-for-development checklist."
        />

        <p class="mt-4 text-sm leading-6 text-site-muted">
            Every new application begins with a preconfigured shell that includes
            responsive layouts, theming, routing, navigation, and shared infrastructure.
        </p>
        </div>
        
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-3">
        <InfoCard label="Role" value="Lead Developer" />
        <InfoCard label="Status" value="Adopted" />
        <InfoCard label="Type" value="Internal Developer Platform" />
      </div>
    </section>

    <CaseStudySection title="Project Overview">
      <p>
        The platform was created to solve a recurring problem across internal
        application development: every new project started differently.
      </p>

      <p>
        Developers were copying folders from older projects, troubleshooting Vue and
        Quasar setup issues, manually configuring layouts and routes, and rebuilding
        common interface patterns before feature development could begin.
      </p>

      <p>
        I created a reusable frontend foundation that allowed developers to start from
        a working application shell with routing, layouts, navigation, theming, dark mode,
        and reusable components already in place.
      </p>
    </CaseStudySection>

<div class="rounded-card border border-brand/30 bg-brand/5 p-6">
  <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
    Proven in Production
  </p>

  <p class="mt-3 leading-8 text-site-muted">
    This reusable frontend platform was developed alongside the
    Self-Service Event Management Platform and served as the foundation
    for that application. Shared layouts, navigation, theming, reusable
    components, and architectural patterns were immediately adopted in
    production, validating the approach while accelerating future
    development.
  </p>
</div>

    <CaseStudySection title="My Role">
      <div class="grid gap-4 md:grid-cols-2">
        <BulletCard title="Problem Identification" :items="[
          'Identified repeated setup friction across new applications',
          'Recognized inconsistent styling and architecture patterns',
          'Proposed a reusable foundation to improve developer productivity',
        ]" />

        <BulletCard title="Architecture & Standards" :items="[
          'Designed a reusable Laravel Blade, Vue 3, and Quasar architecture',
          'Created shared layout and navigation patterns',
          'Standardized theme, dark mode, and responsive behavior',
        ]" />

        <BulletCard title="Component Development" :items="[
          'Built reusable form, table, grid, list, and tab components',
          'Created configurable application shell templates',
          'Included Vue Router and Provide/Inject patterns',
        ]" />

        <BulletCard title="Documentation & Adoption" :items="[
          'Wrote quickstart and configuration documentation',
          'Documented header, navigation, and component usage',
          'Supported adoption across new departmental applications',
        ]" />
      </div>
    </CaseStudySection>

    <section class="grid gap-6 lg:grid-cols-2">
      <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          Challenge
        </p>

        <h2 class="mt-3 text-2xl font-bold text-site-text">
          New applications required repetitive setup before work could begin.
        </h2>

        <p class="mt-4 leading-8 text-site-muted">
          Developers often spent one to two hours copying folders, resolving Vue and
          Quasar loading issues, configuring routes, and rebuilding common layouts
          before a basic page successfully loaded.
        </p>
      </div>

      <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          Solution
        </p>

        <h2 class="mt-3 text-2xl font-bold text-site-text">
          A reusable frontend platform for faster project starts.
        </h2>

        <p class="mt-4 leading-8 text-site-muted">
          The platform provides a working application foundation with standardized
          layouts, routing, navigation, theming, dark mode, and reusable components,
          allowing developers to start building features sooner.
        </p>
      </div>
    </section>

    <section class="space-y-8 border-b border-site-border/60 pb-16">
  <div class="max-w-3xl">
    <h2 class="text-2xl font-bold tracking-tight text-site-text">
      Platform Highlights
    </h2>

    <p class="mt-4 text-lg leading-8 text-site-muted">
      The platform combines reusable architecture, configurable layouts,
      standardized interface patterns, and shared developer tooling to make new
      applications faster to build, easier to maintain, and more consistent
      across projects.
    </p>
  </div>

  <div class="grid gap-8">
    <FeatureBlock
      title="Theme System"
      description="Applications can apply different visual themes while keeping the same underlying layout, navigation, and component structure. Theme support allows teams to adapt branding without rebuilding shared UI patterns."
    >
      <template #media>
        <ScreenshotGallery :images="themeSystemImages" />
      </template>
    </FeatureBlock>

    <FeatureBlock
      title="Navigation Configuration"
      description="Header navigation, sidebar navigation, and mobile navigation can be configured based on each application's needs, allowing teams to reuse the same shell while adapting the interface for different workflows."
    >
      <template #media>
        <ScreenshotGallery :images="navigationConfigImages" />
      </template>
    </FeatureBlock>

    <FeatureBlock
      title="Reusable Component Library"
      description="Shared interface patterns for forms, tables, grids, dialogs, filters, cards, and status indicators help applications feel consistent while reducing duplicated implementation work."
    >
      <template #media>
        <ScreenshotGallery :images="componentLibraryImages" />
      </template>
    </FeatureBlock>

    <FeatureBlock
      title="Developer Documentation"
      description="Quickstart and configuration guides help developers launch a new app, configure routing, customize the application shell, and understand reusable component patterns."
      :image-src="developerDocsImage"
      image-alt="Developer documentation showing quickstart and configuration guidance for the reusable frontend platform."
      image-caption="Documentation supported adoption by making setup and configuration easier for other developers."
    />
  </div>
</section>

    <CaseStudySection title="Technical Challenges">
      <div class="grid gap-4 md:grid-cols-2">
        <BulletCard title="Hybrid Architecture" :items="[
          'Used Laravel Blade for the application shell',
          'Mounted Vue 3 and Quasar inside Blade views',
          'Supported SPA-like experiences without requiring a full rewrite',
        ]" />

        <BulletCard title="Configuration-Driven UI" :items="[
          'Created reusable header and sidebar link configuration',
          'Supported optional sidebar and mobile navigation patterns',
          'Allowed theme and logo behavior to be configured per application',
        ]" />

        <BulletCard title="Reusable Components" :items="[
          'Standardized form, table, tab, grid, and list patterns',
          'Reduced duplicated UI implementation across projects',
          'Improved consistency between applications built by different developers',
        ]" />

        <BulletCard title="Developer Adoption" :items="[
          'Created quickstart documentation for new apps',
          'Reduced project setup from hours to minutes',
          'Supported adoption across multiple internal applications',
        ]" />
      </div>
    </CaseStudySection>

    <CaseStudySection title="Project Impact">
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
          <h3 class="text-lg font-semibold text-site-text">
            Reduced Startup Time
          </h3>
          <p class="mt-3 text-site-muted">
            New application setup was reduced from one to two hours to approximately
            two minutes using the starter template.
          </p>
        </div>

        <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
          <h3 class="text-lg font-semibold text-site-text">
            Saved Engineering Hours
          </h3>
          <p class="mt-3 text-site-muted">
            The platform saved an estimated 50–60 development hours within the first
            60 days of adoption.
          </p>
        </div>

        <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
          <h3 class="text-lg font-semibold text-site-text">
            Improved Consistency
          </h3>
          <p class="mt-3 text-site-muted">
            Applications now share standardized layouts, navigation, responsive behavior,
            theme support, and reusable component patterns.
          </p>
        </div>

        <div class="rounded-card border border-site-border bg-site-surface/70 p-6">
          <h3 class="text-lg font-semibold text-site-text">
            Adopted Across Applications
          </h3>
          <p class="mt-3 text-site-muted">
            The platform became the standard foundation for new departmental applications
            and is currently used across multiple internal projects.
          </p>
        </div>
      </div>
    </CaseStudySection>

    <CaseStudySection title="Related Case Study">
  <p>
    The reusable frontend platform served as the foundation for the
    Self-Service Event Management Platform. Explore the companion case
    study to see how these shared layouts, components, and architectural
    patterns were applied in a production application.
  </p>

  <RouterLink
    :to="{ path: '/projects/self-service-event-management-platform' }"
    class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-hover"
  >
    View Self-Service Event Management Platform →
  </RouterLink>
</CaseStudySection>

    <CaseStudySection title="Lessons Learned">
      <p>
        This project reinforced that improving developer workflows can create meaningful
        business value. By standardizing repeated setup patterns, I helped the team move
        faster while also improving maintainability and consistency across applications.
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
import ScreenshotGallery from '../components/case-study/ScreenshotGallery.vue'



import blankStarterShell from '../assets/images/projects/reusable-frontend-platform/blank-starter-shell.png'
import blankStarterShellDark from '../assets/images/projects/reusable-frontend-platform/blank-starter-shell-dark.png'
import brandThemeShell from '../assets/images/projects/reusable-frontend-platform/brand-theme-shell.png'
import blueThemeShell from '../assets/images/projects/reusable-frontend-platform/blue-theme-shell.png'

import topNavigationShell from '../assets/images/projects/reusable-frontend-platform/top-navigation-shell.png'
import sidebarShell from '../assets/images/projects/reusable-frontend-platform/sidebar-shell.png'
import combinedNavigationShell from '../assets/images/projects/reusable-frontend-platform/combined-navigation-shell.png'
import mobileNavigationShell from '../assets/images/projects/reusable-frontend-platform/mobile-navigation-shell.png'

import componentGridViewImage from '../assets/images/projects/reusable-frontend-platform/grid-table-view.png'
import componentFormImage from '../assets/images/projects/reusable-frontend-platform/form-component.png'
import componentTableImage from '../assets/images/projects/reusable-frontend-platform/table-view.png'

import developerDocsImage from '../assets/images/projects/reusable-frontend-platform/uikit-guide.png'

const technologies = ['Laravel Blade', 'Vue 3', 'Quasar', 'Vue Router', 'Laravel Mix']


const themeSystemImages = [
  {
    src: blankStarterShell,
    alt: 'Blank starter application shell in the default light theme.',
    label: 'Default',
    description:
      'The starter shell begins with a neutral default theme and placeholder application branding.',
  },
  {
    src: blankStarterShellDark,
    alt: 'Blank starter application shell in dark mode.',
    label: 'Dark Mode',
    description:
      'Dark mode support is built into the shared shell so applications can switch themes without changing layout structure.',
  },
  {
    src: brandThemeShell,
    alt: 'Blank starter application shell with purple brand theme applied.',
    label: 'Brand Theme',
    description:
      'Applications can apply organization-specific branding through theme configuration.',
  },
  {
    src: blueThemeShell,
    alt: 'Blank starter application shell with blue theme applied.',
    label: 'Blue Theme',
    description:
      'Theme variants allow the same foundation to support different visual identities.',
  },
]

const navigationConfigImages = [
  {
    src: topNavigationShell,
    alt: 'Starter application shell with header navigation enabled.',
    label: 'Top Navigation',
    description:
      'Header navigation can be enabled for applications that only need simple top-level links.',
  },
  {
    src: sidebarShell,
    alt: 'Starter application shell with sidebar navigation enabled.',
    label: 'Sidebar',
    description:
      'Sidebar navigation can be enabled when applications need persistent section-level navigation.',
  },
  {
    src: combinedNavigationShell,
    alt: 'Starter application shell with both header and sidebar navigation enabled.',
    label: 'Combined',
    description:
      'Applications can combine header and sidebar navigation when workflows need both global and section-level links.',
  },
  {
    src: mobileNavigationShell,
    alt: 'Starter application shell showing mobile navigation drawer.',
    label: 'Mobile',
    description:
      'The same navigation configuration supports responsive mobile drawer behavior.',
  },
]

const componentLibraryImages = [
  {
    src: componentGridViewImage,
    alt: 'Grid-style data view showing records displayed as cards with search and pagination.',
    label: 'Grid View',
    description:
      'Reusable table patterns can display structured data as grids, lists, or traditional tables depending on the workflow.',
  },
  {
    src: componentTableImage,
    alt: 'Data table with filters, status badges, actions, and pagination.',
    label: 'Table View',
    description:
      'Shared table patterns support filtering, status indicators, row actions, and pagination.',
  },
  {
    src: componentFormImage,
    alt: 'Reusable form pattern with fields, actions, and workflow controls.',
    label: 'Forms',
    description:
      'Form patterns standardize common field layouts, actions, and validation states across applications.',
  },
]

</script> 
