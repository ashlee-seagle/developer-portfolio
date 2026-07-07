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
    <CaseStudyHero
      eyebrow="Professional Case Study"
      title="Reusable Frontend Platform"
      description="A reusable UI kit and hybrid SPA starter template built to standardize Laravel, Vue 3, and Quasar applications while reducing repetitive setup work."
      :technologies="technologies"
      screenshot-label="Blank starter application shell"
      :screenshot-src="blankStarterShell"
      screenshot-alt="Blank reusable frontend platform starter shell with placeholder app name, welcome message, and ready-for-development checklist."
      screenshot-caption="Every new application begins with a preconfigured shell that includes responsive layouts, theming, routing, navigation, and shared infrastructure."
    />

    <CaseStudySection title="Project Overview">
      <p>
        The platform was created to solve a recurring problem across internal application development. Each new project started differently, often requiring one to two hours just to establish a working application shell. Developers copied folders from older projects, resolved Vue and Quasar setup issues, configured layouts and routes, and rebuilt common interface patterns before feature development could begin.
      </p>

      <p>
        To address these challenges, I designed and built a reusable frontend platform that provides a fully configured application foundation with standardized routing, layouts, navigation, theming, dark mode, and reusable components. Developers could begin building features immediately instead of recreating the same application foundation for every new project.
      </p>
    </CaseStudySection>

<div class="rounded-card border border-brand/30 bg-brand/5 p-6">
  <p class="eyebrow-label">
    Proven in Production
  </p>

  <p class="body-copy mt-3">
    This reusable frontend platform became the foundation for the
    Self-Service Event Management Platform. Its shared layouts,
    navigation, theming, reusable components, and architectural
    patterns were adopted in production, validating the platform
    while accelerating future application development.
  </p>
</div>
<CaseStudySection title="Production Platform Showcase" title-align="start">
  <p>
    The following production screens demonstrate how the reusable platform
    was applied in a real application. Shared layouts, configurable themes,
    navigation, reusable tables, and interface patterns provided a consistent
    foundation while allowing workflows to be tailored to the needs of the
    Event Management Platform.
  </p>

  <div class="mt-8">
    <ScreenshotGallery :images="productionThemeImages" />
  </div>
</CaseStudySection>

    <CaseStudySection title="My Role">
      <p>
          I identified recurring setup inefficiencies across internal development and proposed a reusable front-end platform to standardize new applications. I designed the architecture, built the shared application foundation, documented implementation patterns, and enabled adoption across future projects.
        </p>
      <div class="grid gap-4 md:grid-cols-2">
        <BulletCard title="Product Strategy & Discovery" :items="[
          'Analyzed recurring setup bottlenecks across new applications',
          'Recognized inconsistent styling and architecture patterns',
          'Proposed a reusable foundation to improve developer productivity',
        ]" />

        <BulletCard title="Platform Architecture" :items="[
          'Designed a reusable Laravel Blade, Vue 3, and Quasar architecture',
          'Created shared layout and navigation patterns',
          'Standardized theme, dark mode, and responsive behavior',
        ]" />

        <BulletCard title="Shared Component Development" :items="[
          'Built reusable form, table, grid, list, and tab components',
          'Developed configurable application shell templates',
          'Established Vue Router and Provide/Inject patterns',
        ]" />

        <BulletCard title="Documentation & Adoption" :items="[
          'Wrote quickstart and configuration documentation',
          'Documented header, navigation, and component usage',
          'Supported adoption across new departmental applications',
        ]" />
      </div>
    </CaseStudySection>

    <section class="space-y-8 border-b border-site-border/60 pb-16">
  <div class="max-w-3xl">
    <h2 class="subsection-title">
      Feature Highlights
    </h2>

    <p class="lead-copy mt-4">
      The platform provides a reusable application foundation with standardized
      architecture, configurable layouts, shared UI patterns, and developer
      tooling that helps teams build new applications faster while maintaining a
      consistent user experience.
    </p>
  </div>

  <div class="grid gap-8">
    <FeatureBlock
  title="Theme System"
  description="Applications can apply different visual themes while reusing the same layouts, navigation, and component structure, allowing branding to change without rebuilding the user interface."
  :highlights="[
    'Configurable color themes',
    'Shared layouts and navigation',
    'Consistent component styling',
    'Brand customization without UI rewrites',
  ]"
>
  <template #media>
    <ScreenshotGallery :images="themeSystemImages" />
  </template>
</FeatureBlock>

    <FeatureBlock
  title="Navigation Configuration"
  description="Applications can configure header, sidebar, and mobile navigation while reusing the same application shell, making it easy to support different workflows without duplicating infrastructure."
  :highlights="[
    'Configurable navigation menus',
    'Desktop and mobile support',
    'Shared application shell',
    'Flexible application structure',
  ]"
>
  <template #media>
    <ScreenshotGallery :images="navigationConfigImages" />
  </template>
</FeatureBlock>

    <FeatureBlock
  title="Reusable Component Library"
  description="Shared interface patterns for forms, tables, grids, dialogs, filters, cards, and status indicators help teams deliver consistent experiences while reducing duplicate implementation."
  :highlights="[
    'Forms and validation',
    'Tables, grids, and filters',
    'Cards, dialogs, and status indicators',
    'Consistent UI across applications',
  ]"
>
  <template #media>
    <ScreenshotGallery :images="componentLibraryImages" />
  </template>
</FeatureBlock>

    <FeatureBlock
      title="Developer Documentation"
      description="Quickstart guides and implementation documentation help developers create new applications, configure the platform, and adopt reusable patterns with minimal setup time."
      :image-src="developerDocsImage"
      image-alt="Developer documentation showing quickstart and configuration guidance for the reusable frontend platform."
      image-caption="Documentation made platform adoption faster by reducing setup and onboarding time."
      :highlights="[
        'Quickstart documentation',
        'Configuration guidance',
        'Reusable component references',
        'Faster developer onboarding',
      ]"
    />
  </div>
</section>
<CaseStudySection title="Project Impact">
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="card-surface p-6">
          <h3 class="card-title">
            Reduced Startup Time
          </h3>
          <p class="body-copy mt-3">
            New application setup was reduced from one to two hours to approximately
            two minutes using the starter template.
          </p>
        </div>

        <div class="card-surface p-6">
          <h3 class="card-title">
            Saved Engineering Hours
          </h3>
          <p class="body-copy mt-3">
            The platform saved an estimated 50–60 development hours within the first
            60 days of adoption.
          </p>
        </div>

        <div class="card-surface p-6">
          <h3 class="card-title">
            Standardized New Applications
          </h3>
          <p class="body-copy mt-3">
            New projects now begin with consistent routing, layouts, theming, navigation, and shared UI patterns, reducing implementation differences across applications.
          </p>
        </div>

        <div class="card-surface p-6">
          <h3 class="card-title">
            Established a Shared Foundation
          </h3>
          <p class="body-copy mt-3">
            The platform became the standard starting point for new internal applications, reducing duplicate effort and encouraging consistent development practices.
          </p> 
        </div>
      </div>
    </CaseStudySection>

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


    <CaseStudySection title="Related Project">
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
import CaseStudySection from '../components/case-study/CaseStudySection.vue'
import BulletCard from '../components/case-study/BulletCard.vue'
import CaseStudyHero from '../components/case-study/CaseStudyHero.vue'
import FeatureBlock from '../components/case-study/FeatureBlock.vue'
import ScreenshotGallery from '../components/case-study/ScreenshotGallery.vue'


import productionDashboardDark from '../assets/images/projects/reusable-frontend-platform/production-dashboard-dark.png'
import productionEventsListDark from '../assets/images/projects/reusable-frontend-platform/production-events-list-dark.png'
import productionEventOverviewDark from '../assets/images/projects/reusable-frontend-platform/production-event-overview-dark.png'
import productionEventOverviewLight from '../assets/images/projects/event-platform/event-overview.png'
import productionEventsListLight from '../assets/images/projects/event-platform/events-list.png'
import productionDashboard from '../assets/images/projects/event-platform/dashboard.png'
import productionAttendees from '../assets/images/projects/event-platform/manage-attendees.png'
import productionAttendeesDark from '../assets/images/projects/reusable-frontend-platform/production-attendees-dark.png'


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

const productionThemeImages = [
  {
    src: productionDashboard,
    alt: 'Production event platform dashboard showing sidebar navigation, event metrics, search, filters, sorting, and a default reusable data table.',
    label: 'Dashboard Table',
    description:
      'The dashboard used the platform’s default table pattern with built-in search, filtering, sorting, pagination, status badges, and row actions.',
  },
  {
    src: productionDashboardDark,
    alt: 'Production event platform dashboard in dark mode.',
    label: 'Dashboard Table (Dark)',
    description:
      'The dashboard used the platform’s default table pattern with built-in search, filtering, sorting, pagination, status badges, and row actions.',
  },
  
  {
    src: productionEventsListLight,
    alt: 'Production event list page showing sidebar navigation, search, filters, sorting, and events displayed in a custom grid view.',
    label: 'Events List',
    description:
      'The events list used the same reusable table foundation, but rendered records as a custom stylized grid view for a more visual browsing experience.',
  },
  {
    src: productionEventsListDark,
    alt: 'Production event list page in dark mode.',
    label: 'Events List (Dark)',
    description:
      'The events list used the same reusable table foundation, but rendered records as a custom stylized grid view for a more visual browsing experience.',
  },
  {
    src: productionEventOverviewLight,
    alt: 'Production event overview page showing event details, recurring event dates, setup progress, status cards, and sidebar navigation.',
    label: 'Event Overview',
    description:
      'Shared layout and card patterns supported event-specific workflows such as recurring dates, setup progress, status summaries, and contextual actions.',
  },
  {
    src: productionEventOverviewDark,
    alt: 'Production event overview page in dark mode.',
    label: 'Event Overview (Dark)',
    description:
      'Shared layout and card patterns supported event-specific workflows such as recurring dates, setup progress, status summaries, and contextual actions.',
  },
   {
    src: productionAttendees,
    alt: 'Production attendee management page showing attendee search, filters, import and export actions, sortable table data, and pagination.',
    label: 'Attendee Management',
    description:
      'Reusable table patterns supported attendee search, filtering, sorting, pagination, status indicators, row actions, imports, exports, and reporting workflows.',
  },
  {
    src: productionAttendeesDark,
    alt: 'Production attendee management page in dark mode.',
    label: 'Attendee Management (Dark)',
    description:
      'Reusable table patterns supported attendee search, filtering, sorting, pagination, status indicators, row actions, imports, exports, and reporting workflows.',
  },
  
]

</script> 
