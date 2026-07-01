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
          <ScreenshotPlaceholder label="Frontend platform screenshot coming soon" />
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
    Rather than being a standalone proof of concept, this reusable platform was
    developed alongside the Self-Service Event Management Platform and became the
    foundation for that application. Components, layouts, and architectural
    patterns created for the platform were immediately reused in production,
    validating the approach while accelerating future development.
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
          The platform combines reusable application architecture, configurable layouts,
          and developer documentation to make new applications faster and more consistent.
        </p>
      </div>

      <div class="grid gap-8">
        <FeatureBlock
          title="Hybrid SPA Starter Template"
          description="A reusable application starter template gives developers a working Laravel, Vue 3, and Quasar foundation with routing, layouts, and application structure already configured."
          :image-src="reusableAppShell"
          image-alt="Reusable frontend platform starter template with configurable header, sidebar navigation, and responsive application layout."
          image-caption="A fully configured application shell provides reusable layouts, navigation, theming, and responsive behavior, allowing developers to focus on building features instead of project setup."
          />

        <FeatureBlock
          title="Configurable Application Shell"
          description="The platform provides configurable layouts with optional side navigation, header navigation, branding, theming, and responsive behavior, allowing each application to adapt to its needs while maintaining a consistent user experience."
          :image-src="configurableAppShell"
          image-alt="Application shell with configurable header, sidebar navigation, search, filters, and event management dashboard."
          image-caption="Applications inherit a shared layout framework with configurable navigation, branding, theming, and responsive behavior, allowing teams to focus on application features instead of rebuilding common infrastructure."
          />
 
        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <MiniFeatureBlock
            title="Theme Variants"
            description="Applications can switch between branded header styles, light mode, and dark mode without rebuilding the layout structure."
            image-caption="Theme configuration supports multiple branded header and layout options."
          />

          <MiniFeatureBlock
            title="Navigation Configuration"
            description="Header links, sidebar links, dropdowns, external links, and mobile navigation are all driven by reusable configuration patterns."
            image-caption="Navigation arrays power desktop, sidebar, and mobile menu experiences."
          />
        </div>

        <FeatureBlock
          title="Reusable Component Library"
          description="The UI kit includes reusable patterns for forms, form fields, multi-step forms, tables, grid views, list views, tab panels, and layout wrappers."
        />

        <FeatureBlock
          title="Developer Documentation"
          description="Quickstart and configuration guides help developers copy the starter template, rename references, configure routes, and customize sitewide settings."
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
import MiniFeatureBlock from '../components/case-study/MiniFeatureBlock.vue'

import reusableAppShell from '../assets/images/projects/reusable-frontend-platform/uikit-app-shell.png'
import configurableAppShell from '../assets/images/projects/reusable-frontend-platform/configurable-app-shell.png'

const technologies = ['Laravel Blade', 'Vue 3', 'Quasar', 'Vue Router', 'Laravel Mix']
</script>