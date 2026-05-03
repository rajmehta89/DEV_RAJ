import { profileData } from "@/data/portfolio";

const SEC = "px-4 py-16 sm:px-8 lg:px-16 xl:px-24 2xl:px-32";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className={`${SEC} pt-28 fade-up`} id="hero">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">

          {/* Left */}
          <div>
            <div className="badge-available mb-5">
              <span className="dot" />
              Available for opportunities
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
              <span className="text-[var(--text)]">Hi, I&apos;m&nbsp;</span>
              <span className="gradient-text">{profileData.name}</span>
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-[var(--secondary)] sm:text-2xl">
              {profileData.title}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-300 text-[15px]">
              {profileData.summary}
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-[var(--muted)]">
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {profileData.location} · {profileData.email}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View My Work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
              <a href={profileData.social.github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </a>
              <a href={profileData.social.linkedin} target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: stats card */}
          <div className="glass-card p-6" style={{ animationDelay: "100ms" }}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)] font-bold text-white shadow-lg shadow-blue-500/30 text-sm">
                RM
              </div>
              <div>
                <p className="font-semibold text-[var(--text)]">{profileData.name}</p>
                <p className="text-xs text-[var(--secondary)]">{profileData.title}</p>
              </div>
              <span className="ml-auto rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                Open to work
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Experience", value: profileData.stats.experience, color: "text-blue-400" },
                { label: "Projects", value: profileData.stats.projectsCompleted, color: "text-purple-400" },
                { label: "Technologies", value: profileData.stats.technologiesMastered, color: "text-cyan-400" },
                { label: "Satisfaction", value: profileData.stats.clientSatisfaction, color: "text-green-400" },
              ].map((s) => (
                <div key={s.label} className="stat-card">
                  <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wide text-[var(--muted)]">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-[color:var(--border)] pt-4">
              <p className="mb-2.5 text-xs font-medium text-[var(--muted)]">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "Java", "Go", "Python", "AI/LLM"].map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────── */}
      <section className={`${SEC} fade-up`} id="about" style={{ animationDelay: "80ms" }}>
        <SectionHeader title="About Me" />
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            <p className="leading-relaxed text-slate-300">
              I build scalable systems, AI-driven platforms, and distributed applications with a strong
              focus on performance, reliability, and clean architecture. My engineering style is
              production-first — clear ownership, practical design decisions, and measurable outcomes.
            </p>
            <p className="leading-relaxed text-[var(--muted-light)]">
              I enjoy shipping complete products end-to-end: planning architecture, implementing
              backend and frontend layers, integrating AI services, and deploying robust releases
              that teams can depend on. I act as a sole developer and solution architect on complex
              projects from day one.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Production-First", "Full Ownership", "AI Integration", "Clean Architecture"].map((t) => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <p className="text-sm font-semibold text-[var(--secondary)]">Engineering Focus</p>
            <ul className="mt-4 space-y-3">
              {[
                "Scalable backend and event-driven systems",
                "AI/LLM integration for real workflows",
                "Performance, reliability, and clean architecture",
                "Full ownership from design to deployment",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────── */}
      <section className={`${SEC} fade-up`} id="skills" style={{ animationDelay: "120ms" }}>
        <SectionHeader title="Skills & Expertise" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <SkillGroup title="Languages" items={profileData.skills.languages} />
          <SkillGroup title="Frameworks & Libraries" items={profileData.skills.frameworks} />
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <TagGroup title="Databases" items={profileData.skills.databases} color="blue" />
          <TagGroup title="Cloud & DevOps" items={profileData.skills.cloudDevops} color="purple" />
          <TagGroup title="AI & ML" items={profileData.skills.aiMl} color="cyan" />
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            { title: "Backend Engineering", items: ["Java", "Go", "Node.js", "Python", "Spring Boot", "Vert.x"] },
            { title: "Frontend", items: ["React", "Next.js", "TypeScript", "React Native"] },
            { title: "AI & Automation", items: ["OpenAI", "Claude AI", "Voice AI", "LLM Integration"] },
            { title: "Infrastructure", items: ["Docker", "AWS", "CI/CD", "Microservices"] },
            { title: "Databases", items: ["PostgreSQL", "MongoDB", "DynamoDB"] },
            { title: "Tools", items: ["Git", "Linux", "REST APIs", "Event-driven Arch"] },
          ].map((domain) => (
            <div key={domain.title} className="card p-4 lg:col-span-1 md:col-span-1">
              <p className="text-sm font-semibold text-[var(--text)]">{domain.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted-light)]">{domain.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────── */}
      <section className={`${SEC} fade-up`} id="projects" style={{ animationDelay: "160ms" }}>
        <SectionHeader title="Featured Projects" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {profileData.projects.map((project) => (
            <article key={project.id} className="card flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-base font-semibold leading-snug text-[var(--text)]">{project.title}</h4>
                <CategoryBadge category={project.category} />
              </div>
              <ul className="mt-4 flex-1 space-y-2">
                {project.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-pill">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Experience ───────────────────────────────── */}
      <section className={`${SEC} fade-up`} id="experience" style={{ animationDelay: "200ms" }}>
        <SectionHeader title="Work Experience" />
        <div className="mt-8 space-y-6">
          {profileData.experience.map((job) => (
            <div key={job.id} className="timeline-item pb-6">
              <div className={`timeline-dot ${job.type === "current" ? "active" : ""}`} />
              <div className="card p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-semibold text-[var(--text)]">{job.title}</h4>
                    <p className="mt-0.5 text-sm text-[var(--secondary)]">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {job.type === "current" && (
                      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                        Current
                      </span>
                    )}
                    <span className="tag-pill">{job.period}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.highlights.slice(0, 3).map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Freelance ────────────────────────────────── */}
      <section className={`${SEC} fade-up`} id="freelance" style={{ animationDelay: "240ms" }}>
        <SectionHeader title="Freelance & Client Work" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {profileData.clientProjects.map((project) => (
            <article key={project.id} className="card flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base font-semibold text-[var(--text)]">{project.title}</h4>
                  <p className="mt-0.5 text-xs text-[var(--secondary)]">{project.type}</p>
                </div>
                <span className="tag-pill shrink-0">{project.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
              <div className="mt-3 impact-block">
                <span className="font-semibold">Impact: </span>{project.impact}
              </div>
              <blockquote className="mt-3 border-l-2 border-[var(--primary)]/40 pl-3 text-sm italic text-[var(--muted-light)]">
                &ldquo;{project.feedback}&rdquo;
              </blockquote>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Philosophy ───────────────────────────────── */}
      <section className={`${SEC} fade-up`} id="philosophy" style={{ animationDelay: "280ms" }}>
        <SectionHeader title="Engineering Philosophy" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { heading: "Scale by Design", body: "Build systems that stay maintainable and performant under load from day one." },
            { heading: "Clean Architecture", body: "Clear boundaries, separation of concerns, and full ownership across layers." },
            { heading: "Reliability First", body: "Prioritize observability, fault tolerance, and measurable SLAs in production." },
            { heading: "Measurable Impact", body: "Deliver end-to-end solutions with real, quantifiable business outcomes." },
          ].map((card) => (
            <div key={card.heading} className="card p-5">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]/15">
                <svg className="h-4 w-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-[var(--text)]">{card.heading}</h4>
              <p className="mt-1.5 text-sm text-[var(--muted-light)]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ────────────────────────────────── */}
      <section className={`${SEC} fade-up`} id="education" style={{ animationDelay: "320ms" }}>
        <SectionHeader title="Education" />
        <div className="mt-8">
          <div className="card inline-flex w-full flex-col gap-1 p-6 lg:w-auto">
            <p className="text-lg font-semibold text-[var(--text)]">{profileData.education.degree}</p>
            <p className="text-[var(--secondary)]">{profileData.education.institution}</p>
            <p className="text-sm text-[var(--muted)]">
              {profileData.education.period} &nbsp;·&nbsp; CGPA {profileData.education.cgpa}
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────── */}
      <section className={`${SEC} fade-up`} id="contact" style={{ animationDelay: "360ms" }}>
        <SectionHeader title="Get In Touch" />
        <p className="mt-3 text-[var(--muted-light)]">
          Available for high-ownership engineering roles and production-grade freelance builds.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="glass-card p-6 space-y-4">
            <p className="text-sm font-semibold text-[var(--secondary)]">Direct Contact</p>
            {[
              { icon: "📧", label: "Email", value: profileData.email },
              { icon: "📱", label: "Phone", value: profileData.phone },
              { icon: "📍", label: "Location", value: profileData.location },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="text-xs text-[var(--muted)]">{item.label}</p>
                  <p className="text-sm font-medium text-[var(--text)]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-card p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold text-[var(--secondary)]">What I bring to your team</p>
              <ul className="mt-4 space-y-2">
                {[
                  "Full-stack ownership from architecture to deployment",
                  "AI/LLM integration and voice AI systems",
                  "Production-grade reliability and clean code",
                  "Proactive communication and beyond-scope initiative",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href={`mailto:${profileData.email}`} className="btn-primary mt-6 self-start">
              Send an Email
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────── */}
      <footer className="border-t border-[color:var(--border)] px-4 py-6 text-center text-xs text-[var(--muted)] sm:px-8">
        <p>
          Built with Next.js & Tailwind CSS &nbsp;·&nbsp; {profileData.name} © 2026
        </p>
      </footer>
    </main>
  );
}

/* ── Sub-components ────────────────────────────────── */

function SectionHeader({ title }: { title: string }) {
  return (
    <div>
      <h3 className="section-title">{title}</h3>
      <div className="section-line" />
    </div>
  );
}

function CategoryBadge({ category }: { category: string }) {
  const map: Record<string, string> = {
    Backend: "category-backend",
    "AI/ML": "category-ai",
    Data: "category-data",
    "Full-Stack": "category-fullstack",
    Mobile: "category-mobile",
  };
  return (
    <span className={`category-badge shrink-0 ${map[category] ?? "category-backend"}`}>
      {category}
    </span>
  );
}

function SkillGroup({ title, items }: { title: string; items: { name: string; level: number }[] }) {
  return (
    <div className="card p-5">
      <h4 className="text-sm font-semibold text-[var(--text)]">{title}</h4>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.name}>
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="font-medium text-slate-200">{item.name}</span>
              <span className="text-[var(--muted)]">{item.level}%</span>
            </div>
            <div className="skill-bar-track">
              <div className="skill-bar-fill" style={{ width: `${item.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TagGroup({ title, items, color }: { title: string; items: string[]; color: string }) {
  const colorMap: Record<string, string> = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    cyan: "text-cyan-400",
  };
  return (
    <div className="card p-5">
      <h4 className={`text-sm font-semibold ${colorMap[color] ?? "text-[var(--text)]"}`}>{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="tag-pill">{item}</span>
        ))}
      </div>
    </div>
  );
}
