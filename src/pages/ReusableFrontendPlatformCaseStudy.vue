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
             <!-- :src="blankStarterShell" -->
  <ScreenshotPlaceholder
    label="Blank starter application shell"
     :src="reusableAppShell"
    alt="Blank reusable frontend platform starter shell with default header, footer, and empty content area."
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
  The platform combines reusable architecture, configuration-driven layouts,
  standardized components, and shared application patterns to make new
  development faster and more consistent.
</p>
  </div>

  <div class="grid gap-8">
    <div class="rounded-card border border-site-border bg-site-surface p-8">
  <div class="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
    <ScreenshotGallery :images="starterShellImages" />

    <div>
      <h3 class="text-xl font-semibold text-site-text">
        Configuration-Driven Application Shell
      </h3>

      <p class="mt-3 text-sm leading-6 text-site-muted">
        The starter template provides a functional application shell with layouts,
        routing, theming, navigation, and shared infrastructure already configured.
        Applications are assembled through configuration instead of rebuilding the
        same foundation for every project.
      </p>
    </div>
  </div>
</div>

<div class="rounded-card border border-site-border bg-site-surface p-8">
  <div class="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
    <ScreenshotGallery :images="layoutPatternImages" />

    <div>
      <h3 class="text-xl font-semibold text-site-text">
        Flexible Application Layouts
      </h3>

      <p class="mt-3 text-sm leading-6 text-site-muted">
        Applications can share the same underlying framework while adapting their
        layout, navigation, branding, and theme behavior to fit different use cases.
      </p>
    </div>
  </div>
</div>

    <FeatureBlock
      title="Reusable Component Library"
      description="The platform includes reusable interface patterns for forms, tables, cards, tabs, grid views, list views, filters, status badges, and dashboard widgets."
      :image-src="componentLibraryImage"
      image-alt="Application screen showing reusable interface components including form fields, buttons, layout containers, and workflow controls."
      image-caption="Shared interface components help applications feel consistent while reducing duplicated development work."
    />

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

// TODO: Use current purple shell until blank/sidebar/theme variants are captured.
import reusableAppShell from '../assets/images/projects/reusable-frontend-platform/uikit-app-shell.png'
// TODO: Replace with screenshots showing the same shell with sidebar/nav/theme otions configured.
import configurableAppShell from '../assets/images/projects/reusable-frontend-platform/configurable-app-shell.png'
import componentLibraryImage from '../assets/images/projects/reusable-frontend-platform/form-component.png'
import developerDocsImage from '../assets/images/projects/reusable-frontend-platform/uikit-guide.png'

// TODO: Replace this with the true white/default blank starter shell screenshot.
// import blankStarterShell from '../assets/images/projects/reusable-frontend-platform/blank-starter-shell.png'


// TODO: Replace with dark mode shell or dashboard screenshot.
import darkModeShell from '../assets/images/projects/reusable-frontend-platform/dark-mode-shell.png'

// TODO: Replace with a completed app built from the starter platform.
import completedAppExample from '../assets/images/projects/event-platform/events-list.png'

const technologies = ['Laravel Blade', 'Vue 3', 'Quasar', 'Vue Router', 'Laravel Mix']

const starterShellImages = [
  {
    // src: blankStarterShell,
     src: reusableAppShell,
    alt: 'Blank reusable frontend platform starter shell with default header, footer, and empty content area.',
    label: 'Blank Shell',
    description:
      'Developers begin with a preconfigured application shell instead of copying and troubleshooting legacy project setup.',
  },
  {
    src: reusableAppShell,
    alt: 'Reusable frontend platform shell with configured sidebar and header navigation.',
    label: 'Navigation',
    description:
      'Sidebar and header navigation can be enabled through configuration when an application needs them.',
  },
  {
    src: configurableAppShell,
    alt: 'Reusable frontend platform shell with configured branding and application layout.',
    label: 'Brand Theme',
    description:
      'Applications can apply branding and layout options through configuration instead of custom implementation.',
  },
  {
    src: completedAppExample,
    alt: 'Completed internal application built from the reusable frontend platform.',
    label: 'Completed App',
    description:
      'The same starter foundation can support production applications with customized workflows and content.',
  },
]

const layoutPatternImages = [
  {
    src: reusableAppShell,
    alt: 'Reusable frontend platform layout with sidebar and header navigation.',
    label: 'Sidebar Layout',
    description:
      'Applications can use a sidebar layout when they need persistent section-level navigation.',
  },
  {
    src: configurableAppShell,
    alt: 'Reusable frontend platform layout with header navigation and configured branding.',
    label: 'Header Layout',
    description:
      'Header navigation supports simpler applications that do not require a full sidebar.',
  },
  {
    src: darkModeShell,
    alt: 'Reusable frontend platform layout displayed in dark mode.',
    label: 'Dark Mode',
    description:
      'Theme support allows applications to switch between light and dark modes while preserving the same layout patterns.',
  },
]

</script> 
