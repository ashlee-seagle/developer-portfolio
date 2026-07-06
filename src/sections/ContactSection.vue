<template>
  <section id="contact" class="section-block border-t border-site-border/60">
    <div class="rounded-card border border-site-border bg-site-surface/80 p-8 shadow-card sm:p-10">
      <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p class="eyebrow-label">
            Contact
          </p>

          <h2 class="section-title mt-4">
            Interested in working together?
          </h2>

          <p class="body-copy mt-4 max-w-2xl">
            I’m open to frontend and full-stack opportunities where I can build
            thoughtful user experiences, internal tools, and scalable business applications.
          </p>
        </div>

        <div class="flex flex-col gap-4 sm:flex-row lg:justify-end">

          <a
            href="https://www.linkedin.com/in/ashleeseagle/"
            class="button-secondary hover:border-site-muted hover:bg-white/5"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ashlee-seagle/"
            class="button-secondary hover:border-site-muted hover:bg-white/5"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <!--
                TODO:
                Add secure contact form in a future sprint.

                Potential implementation:
                - Add form fields for name, email, and message
                - Add client-side validation
                - Add backend/serverless email handler
                - Integrate email service such as Resend, SendGrid, or Postmark
                - Add spam protection such as Cloudflare Turnstile or hCaptcha
                - Add success and error states
                - Add rate limiting if backend supports it
             -->
        </div>
      </div>
    </div>
  </section>
</template>
