import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { TransitionLink } from "@/components/layout/TransitionLink";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * Framed & Indexed Case Study Card: clean matted thumbnail frame with hairline corner crop marks,
 * plus crisp tabular index header (`IDX 01 · CS·FX3·01 · Sony FX3`) above the title.
 */
export function ProjectCard({
  project,
  delay = 0,
  surface = "light",
  className,
}: {
  project: Project;
  delay?: number;
  surface?: "light" | "dark";
  className?: string;
}) {
  const dark = surface === "dark";
  return (
    <li className={cn("h-full", className)} data-reveal="rise" style={{ "--d": `${delay}ms`, "--dur": "650ms" } as CSSProperties}>
      <TransitionLink
        href={`/projects/${project.slug}`}
        className={cn(
          "group relative grid h-full grid-cols-[5.5rem_1fr] gap-3.5 rounded-[18px] border p-3.5 transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out-expo hover:-translate-y-1 sm:grid-cols-[minmax(7rem,9rem)_1fr] sm:gap-5 sm:p-4",
          dark
            ? "border-white/12 bg-white/[0.05] hover:border-white/35 hover:bg-white/[0.08]"
            : "border-line bg-white hover:border-blue/45 hover:shadow-[var(--shadow-lift)]",
        )}
      >
        {/* Cleanly matted thumbnail frame — unobstructed image */}
        <span
          className={cn(
            "relative block aspect-square self-start overflow-hidden rounded-[12px] border p-1 sm:aspect-[1/0.92]",
            dark ? "border-white/15 bg-navy-950" : "border-line bg-mist",
          )}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute top-0.5 left-0.5 z-10 size-2 border-t-2 border-l-2 border-orange/75"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute right-0.5 bottom-0.5 z-10 size-2 border-r-2 border-b-2 border-orange/75"
          />
          <span className="relative block h-full w-full overflow-hidden rounded-[8px] bg-navy-950">
            <Image
              src={project.thumbnail.src}
              alt=""
              fill
              sizes="(min-width: 640px) 9rem, 5.5rem"
              quality={85}
              className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-[1.05]"
            />
          </span>
        </span>

        <span className="flex min-w-0 flex-col py-0.5 pr-0.5">
          <span
            className={cn(
              "num mb-1 flex flex-wrap items-center gap-1.5 font-mono text-[0.67rem] font-semibold uppercase tracking-[0.11em]",
              dark ? "text-white/60" : "text-muted",
            )}
          >
            <span className="rounded bg-orange/12 px-1.5 py-0.5 font-bold text-orange">
              IDX {project.index}
            </span>
            <span>{project.code}</span>
            <span aria-hidden>·</span>
            <span>{project.camera}</span>
          </span>

          <span className="flex items-start justify-between gap-3">
            <span className={cn("text-[1.03rem] font-semibold leading-snug tracking-[-0.015em]", dark ? "text-white" : "text-ink")}>
              {project.title}
            </span>
            <span
              aria-hidden
              className={cn(
                "grid size-9 shrink-0 place-items-center rounded-full border transition-colors duration-200",
                dark
                  ? "border-white/25 text-white group-hover:border-white group-hover:bg-white group-hover:text-navy-950"
                  : "border-blue/25 text-blue group-hover:border-blue group-hover:bg-blue group-hover:text-white",
              )}
            >
              <ArrowRight size={15} weight="bold" className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </span>

          <span className="mt-2.5 flex flex-wrap gap-1.5">
            {project.cardTags.map((t) => (
              <span
                key={t}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[0.72rem] font-medium",
                  dark ? "bg-white/10 text-white/80" : "bg-blue-100/70 text-navy",
                )}
              >
                {t}
              </span>
            ))}
          </span>

          <span className={cn("mt-2.5 text-[0.87rem] leading-relaxed", dark ? "text-white/70" : "text-ink-2")}>
            {project.cardSummary}
          </span>
        </span>
      </TransitionLink>
    </li>
  );
}
