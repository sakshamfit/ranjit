import type { CSSProperties } from "react";
import { ArrowDownRight } from "@phosphor-icons/react/dist/ssr/ArrowDownRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { projects } from "@/content/projects";
import { ProjectsScene } from "./ProjectsScene";
import { FilteredProjects, ProjectFilterProvider, ProjectFilterRow } from "./ProjectsFilter";
import styles from "./projects.module.css";

const v = (vars: Record<string, string>) => vars as CSSProperties;

/** Numbers from the case studies themselves. */
const verified = [
  { value: `0${projects.length}`, label: "Indexed case studies", source: "Sony α7 IV, aerial & systems" },
  { value: "33MP", label: "Sony α7 IV RAW stills", source: "14-bit + 10-bit 4K cinema" },
  { value: "500+", label: "Permitted flights logged", source: "Across UP & Bihar" },
  { value: "48h", label: "Graded gallery delivery", source: "Dual-slot & NVMe backed up" },
];

export function ProjectsLanding() {
  return (
    <ProjectFilterProvider>
      <section
        id="projects"
        data-header-theme="dark"
        data-surface="dark"
        aria-labelledby="projects-title"
        className="relative isolate overflow-hidden bg-[#0e1f3b] text-white"
      >
        <div className="relative h-[62svh] min-h-[24rem] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
          <ProjectsScene />
        </div>

        <div className={`shell relative ${styles.heroGrid}`}>
          <div className={styles.aTitle}>
            <p className="type-label dm-0 text-white/65" data-reveal="fade" style={v({ "--d": "1500ms" })}>
              Case Study Index · 01 — 05
            </p>
            <h1
              id="projects-title"
              data-section-heading
              className={`${styles.bigTitle} dm-1 mt-3`}
              data-reveal
              style={v({ "--d": "1600ms", "--dur": "750ms", "--ry": "20px" })}
            >
              Projects
            </h1>
          </div>

          <div className={`${styles.aFilters} dm-2`} data-reveal="fade" style={v({ "--d": "1800ms" })}>
            <ProjectFilterRow revealCards />
          </div>

          <a
            href="#case-studies"
            className={`${styles.scrollBtn} ${styles.aDisc}`}
            aria-label="Jump to the case studies"
            data-reveal="scale"
            style={v({ "--d": "1700ms", "--dur": "600ms" })}
          >
            <ArrowDownRight size={30} weight="bold" aria-hidden />
          </a>

          <div className={styles.aCopy}>
            <p className={`${styles.accent} dm-2`} data-reveal style={v({ "--d": "1900ms" })}>
              Sony M4 in hand, drone in the sky
            </p>
            <p className="type-body pretty dm-3 mt-4 text-[0.95rem] text-white/80" data-reveal style={v({ "--d": "2000ms" })}>
              Five documented chapters covering Sony Alpha a7 IV portraiture &amp; weddings, aerial
              brand films, photogrammetric mapping, serial-tracked kit control and monthly builder
              documentation.
            </p>
          </div>

          <p className={`${styles.impact} ${styles.aImpact} dm-0`} data-reveal style={v({ "--d": "1750ms", "--dur": "700ms" })}>
            Sony M4
            <br />
            to the sky
          </p>

          <div className={`${styles.aCrumb} dm-1`} data-reveal="fade" style={v({ "--d": "1900ms" })}>
            <span aria-hidden className="dm-1 block h-px w-full max-w-[28rem] bg-white/40" data-reveal="draw-x" style={v({ "--d": "1950ms" })} />
            <p className="type-label mt-4 text-[0.7rem] tracking-[0.2em] text-white/85">
              01 Plan <span aria-hidden className="mx-2 text-white/45">/</span> 02 Fly{" "}
              <span aria-hidden className="mx-2 text-white/45">/</span> 03 Frame{" "}
              <span aria-hidden className="mx-2 text-white/45">/</span> 05 Deliver
            </p>
          </div>

          <dl className={`${styles.aMetrics} grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/15`}>
            {verified.map((m, i) => (
              <div
                key={m.label}
                className={`flex flex-col-reverse justify-end sm:px-5 sm:first:pl-0 dm-${i}`}
                data-reveal="rise"
                style={v({ "--d": `${2150 + i * 100}ms`, "--dur": "600ms" })}
              >
                <dt className="mt-2 text-[0.78rem] leading-snug text-white/75">
                  {m.label}
                  <span className="block text-white/45">{m.source}</span>
                </dt>
                <dd className="num text-[clamp(1.6rem,1rem+1.1vw,2.2rem)] font-[760] leading-none tracking-[-0.045em]">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Framed case study cards + Master Case Study Index Table */}
      <section
        id="case-studies"
        aria-labelledby="case-studies-title"
        data-header-theme="light"
        className="relative scroll-mt-20 bg-white pb-24 text-ink sm:pb-28"
      >
        <div className="shell">
          <div className="flex flex-col gap-6 pt-16 sm:pt-20">
            <div>
              <p className="type-label text-muted" data-reveal="fade">
                Indexed Case Studies · 01 — 05
              </p>
              <h2 id="case-studies-title" data-section-heading className="type-title mt-3" data-reveal style={v({ "--d": "80ms" })}>
                Five projects, one page each.
              </h2>
            </div>
            <div data-reveal="fade" style={v({ "--d": "160ms" })}>
              <ProjectFilterRow tone="light" />
            </div>
          </div>

          <div className="mt-10">
            <FilteredProjects />
          </div>

          {/* Master Case Study Index Ledger */}
          <div className="mt-16 overflow-hidden rounded-[20px] border border-line bg-mist/60" data-reveal="rise">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-white px-5 py-3.5">
              <span className="num font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy">
                Master Case Study Directory · IDX 01 — 05
              </span>
              <TransitionLink
                href="/frames"
                className="inline-flex items-center gap-1 text-[0.76rem] font-semibold text-blue hover:underline"
              >
                <span>Open Photographic Contact Sheet</span>
                <ArrowUpRight size={13} weight="bold" aria-hidden />
              </TransitionLink>
            </div>
            <ol className="divide-y divide-line">
              {projects.map((p) => (
                <li key={p.slug}>
                  <TransitionLink
                    href={`/projects/${p.slug}`}
                    className="group grid gap-2 px-5 py-4 transition-colors hover:bg-white sm:grid-cols-[4.5rem_9rem_minmax(0,1.4fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-4"
                  >
                    <span className="num font-mono text-[0.78rem] font-bold text-orange">
                      IDX {p.index}
                    </span>
                    <span className="num font-mono text-[0.72rem] font-medium text-muted">
                      {p.code}
                    </span>
                    <span className="font-semibold text-ink group-hover:text-navy">
                      {p.title}
                    </span>
                    <span className="text-[0.8rem] text-ink-2">{p.camera}</span>
                    <span className="inline-flex items-center gap-1 text-[0.78rem] font-semibold text-blue">
                      <span>Open</span>
                      <ArrowUpRight size={14} weight="bold" aria-hidden />
                    </span>
                  </TransitionLink>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </ProjectFilterProvider>
  );
}
