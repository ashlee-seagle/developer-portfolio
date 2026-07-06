<template>
  <section class="section-block grid gap-10 border-b border-site-border/60 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
    <!-- Left: Hero Content -->
    <div class="max-w-3xl">
      <p class="eyebrow-label text-site-muted/90">
        Full-Stack Software Engineer
      </p>

      <h1 class="page-title mt-4">
        I build scalable business applications <span class="text-brand">end-to-end</span>.
      </h1>

      <p class="lead-copy mt-6 max-w-2xl">
         7+ years of web development experience, including 3+ years building full-stack applications, internal business tools, and customer-facing solutions.
      </p>

      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          class="button-primary hover:bg-brand-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-site-bg"
        >
          View My Work
        </a>


      </div> 
    </div>

    <!-- Right: Code Card -->
     <div class="hidden sm:block lg:-mt-2 lg:pl-8">
      <div class="rounded-card border border-site-border bg-site-surface/80 p-4 shadow-card backdrop-blur -mt-2">
      <div class="mb-4 flex gap-2">
        <span class="h-3 w-3 rounded-full bg-status-danger"></span>
        <span class="h-3 w-3 rounded-full bg-status-warning"></span>
        <span class="h-3 w-3 rounded-full bg-status-success"></span>
      </div>

      <!-- Desktop -->
<pre class="hidden overflow-x-auto rounded-xl bg-site-bg p-5 text-sm leading-7 text-site-muted sm:block">
<code><span class="text-brand">export function</span> <span class="text-site-text">buildSolutions</span>() {
  <span class="text-brand">return</span> {
    <span class="text-status-success">frontend</span>: [<span class="text-status-warning">'Vue'</span>, <span class="text-status-warning">'React'</span>, <span class="text-status-warning">'Tailwind'</span>],
    <span class="text-status-success">backend</span>: [<span class="text-status-warning">'Laravel'</span>, <span class="text-status-warning">'Node.js'</span>, <span class="text-status-warning">'REST APIs'</span>],
    <span class="text-status-success">database</span>: [<span class="text-status-warning">'MySQL', 'SQL Server'</span>],
    <span class="text-status-success">focus</span>: <span class="text-status-warning">'Clean UI. Solid architecture.'</span>
  }
}</code>
</pre>

    </div> 
     </div>
    
  </section>
</template>
