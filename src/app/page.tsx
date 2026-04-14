import { profileData } from "@/data/portfolio";

const sectionCard = "py-10";
const sectionTitle = "text-2xl font-semibold text-[var(--text)]";

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-2 px-4 py-10 sm:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <header className="fade-up py-4">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="mt-2 text-4xl font-bold text-[var(--text)] sm:text-6xl">{profileData.name}</h1>
            <h2 className="mt-2 text-xl font-semibold text-slate-200">{profileData.title}</h2>
            <p className="mt-3 max-w-2xl text-slate-200">{profileData.summary}</p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              {profileData.location} · {profileData.phone} · {profileData.email}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--primary-text)] transition hover:brightness-95"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-lg border border-[color:var(--border)] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-5">
            <p className="text-sm font-semibold text-[var(--secondary)]">Ready to collaborate</p>
            <p className="mt-2 text-sm text-slate-200">Available for full-time roles and high-ownership freelance builds.</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <StatCard label="Experience" value={profileData.stats.experience} />
              <StatCard label="Projects" value={profileData.stats.projectsCompleted} />
              <StatCard label="Tech Mastered" value={profileData.stats.technologiesMastered} />
              <StatCard label="Client Satisfaction" value={profileData.stats.clientSatisfaction} />
            </div>
          </div>
        </div>
      </header>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "80ms" }} id="about">
        <h3 className={sectionTitle}>About</h3>
        <div className="mt-2 h-px w-20 bg-[var(--primary)]/60" />
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="max-w-4xl leading-relaxed text-slate-200">
              I build scalable systems, AI-driven platforms, and distributed applications with strong
              focus on performance, reliability, and clean architecture. My engineering style is
              production-first: clear ownership, practical design decisions, and measurable outcomes.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              I enjoy shipping complete products end-to-end: planning architecture, implementing
              backend and frontend layers, integrating AI services, and deploying robust releases
              that teams can depend on.
            </p>
          </div>
          <div className="rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-5">
            <p className="text-sm font-semibold text-[var(--secondary)]">Engineering Focus</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
              <li>Scalable backend and event-driven systems</li>
              <li>AI/LLM integration for real workflows</li>
              <li>Performance, reliability, and clean architecture</li>
              <li>Full ownership from design to deployment</li>
            </ul>
          </div>
        </div>
    </section>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "120ms" }}>
        <h3 className={sectionTitle}>Skills</h3>
        <div className="mt-2 h-px w-20 bg-[var(--primary)]/60" />
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Domain title="Backend Engineering" items={["Java", "Go", "Node.js", "Python", "Spring Boot", "Vert.x"]} />
          <Domain title="Frontend Development" items={["React", "Next.js", "TypeScript", "React Native"]} />
          <Domain title="AI & Automation" items={["OpenAI", "Claude AI", "Voice AI", "LLM Integration"]} />
          <Domain title="Infrastructure" items={["Docker", "AWS", "CI/CD", "Microservices"]} />
          <Domain title="Databases" items={["PostgreSQL", "MongoDB", "DynamoDB"]} />
          <Domain title="Tools" items={["Git", "Linux", "REST APIs", "Event-driven Architecture"]} />
        </div>
      </section>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "160ms" }} id="projects">
        <h3 className={sectionTitle}>Projects</h3>
        <div className="mt-2 h-px w-20 bg-[var(--primary)]/60" />
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {profileData.projects.map((project) => (
            <article key={project.id} className="card-hover rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-5">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-lg font-semibold text-[var(--text)]">{project.title}</h4>
                <span className="rounded-full border border-[color:var(--border)] px-2 py-1 text-xs text-[var(--secondary)]">
                  {project.category}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-slate-200">Key Contributions</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-slate-200">
                {project.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-[color:var(--border)] px-2 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-[var(--primary)]/40 bg-[var(--primary)]/10 p-3 text-sm text-blue-200">
                Impact: built with production-grade patterns and optimized for scale.
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "200ms" }}>
        <h3 className={sectionTitle}>Work Experience</h3>
        <div className="mt-2 h-px w-20 bg-[var(--primary)]/60" />
        <div className="mt-5 space-y-5">
          {profileData.experience.map((job) => (
            <article key={job.id} className="border-b border-[color:var(--border)] pb-5 last:border-b-0 last:pb-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-semibold text-[var(--text)]">{job.title}</h4>
                <span className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-slate-300">{job.period}</span>
              </div>
              <p className="mt-1 text-[var(--muted)]">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-200">
                {job.highlights.slice(0, 3).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "240ms" }}>
        <h3 className={sectionTitle}>Freelance / Client Work</h3>
        <div className="mt-2 h-px w-20 bg-[var(--primary)]/60" />
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {profileData.clientProjects.map((project) => (
            <article key={project.id} className="card-hover rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-4">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-lg font-semibold text-[var(--text)]">{project.title}</h4>
                <span className="text-xs text-[var(--muted)]">{project.period}</span>
              </div>
              <p className="text-sm text-[var(--secondary)]">{project.type}</p>
              <p className="mt-2 text-slate-200">{project.description}</p>
              <p className="mt-3 rounded-lg border border-[var(--primary)]/40 bg-[var(--primary)]/10 p-3 text-sm text-green-300">
                Impact: {project.impact}
              </p>
              <p className="mt-3 text-sm italic text-[var(--muted)]">"{project.feedback}"</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[color:var(--border)] px-2 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "280ms" }}>
        <h3 className={sectionTitle}>Engineering Philosophy</h3>
        <div className="mt-2 h-px w-20 bg-[var(--primary)]/60" />
        <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-200">
          <li>Build systems that scale and remain maintainable under load.</li>
          <li>Design clean architecture with clear boundaries and ownership.</li>
          <li>Prioritize performance, reliability, and observability in production.</li>
          <li>Deliver end-to-end solutions with measurable business impact.</li>
        </ul>
      </section>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "320ms" }}>
        <h3 className={sectionTitle}>Technology Proficiency</h3>
        <div className="mt-2 h-px w-20 bg-[var(--primary)]/60" />
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <SkillGroup title="Languages" items={profileData.skills.languages} />
          <SkillGroup title="Frameworks" items={profileData.skills.frameworks} />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <TagGroup title="Databases" items={profileData.skills.databases} />
          <TagGroup title="Cloud & DevOps" items={profileData.skills.cloudDevops} />
          <TagGroup title="AI / ML" items={profileData.skills.aiMl} />
        </div>
      </section>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "360ms" }}>
        <h3 className={sectionTitle}>Education</h3>
        <div className="mt-2 h-px w-20 bg-[var(--primary)]/60" />
        <p className="mt-4 text-lg text-[var(--text)]">{profileData.education.degree}</p>
        <p className="text-slate-200">{profileData.education.institution}</p>
        <p className="text-sm text-[var(--muted)]">
          {profileData.education.period} · CGPA {profileData.education.cgpa}
        </p>
      </section>

      <section className={`${sectionCard} fade-up`} style={{ animationDelay: "400ms" }} id="contact">
        <h3 className={sectionTitle}>Contact Us</h3>
        <p className="mt-2 text-[var(--muted)]">
          Let&apos;s build production-grade software together. I&apos;m available for high-ownership engineering work.
        </p>
        <div className="mt-6">
          <div className="space-y-3 rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-5">
            <p className="text-sm font-semibold text-[var(--secondary)]">Direct Contact</p>
            <p className="text-sm text-slate-200">{profileData.email}</p>
            <p className="text-sm text-slate-200">{profileData.phone}</p>
            <p className="text-sm text-[var(--muted)]">{profileData.location}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-3">
      <p className="text-xl font-bold text-[var(--primary)]">{value}</p>
      <p className="text-[11px] uppercase tracking-wide text-[var(--muted)]">{label}</p>
    </div>
  );
}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: { name: string; level: number }[];
}) {
  return (
    <div className="card-hover rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-5">
      <h4 className="text-lg font-semibold text-[var(--text)]">{title}</h4>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.name}>
            <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
              <span>{item.name}</span>
              <span className="text-[var(--muted)]">{item.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-[var(--primary)]"
                style={{ width: `${item.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TagGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-hover rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-5">
      <h4 className="text-base font-semibold text-[var(--text)]">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Domain({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-hover rounded-xl border border-[color:var(--border)] bg-[#0b162a] p-5">
      <h4 className="text-base font-semibold text-[var(--text)]">{title}</h4>
      <p className="mt-2 text-sm text-slate-200">{items.join(", ")}</p>
    </div>
  );
}
