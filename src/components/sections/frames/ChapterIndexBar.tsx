import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { homeChapters } from "@/content/frames";

export function ChapterIndexBar() {
  return (
    <nav
      aria-label="Page chapter index"
      data-header-theme="light"
      className="border-y border-line bg-mist/85 backdrop-blur-sm"
    >
      <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3.5">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="inline-block size-2 rounded-full bg-orange"
          />
          <span className="num text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy">
            Chapter Index
          </span>
        </div>

        <ol className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7">
          {homeChapters.map((ch) => (
            <li key={ch.index}>
              <a
                href={ch.href}
                className="group inline-flex items-baseline gap-1.5 text-[0.82rem] font-medium text-ink-2 transition-colors hover:text-navy"
              >
                <span className="num text-[0.68rem] font-semibold tracking-[0.08em] text-orange">
                  {ch.index}
                </span>
                <span className="underline-offset-4 group-hover:underline">
                  {ch.label}
                </span>
              </a>
            </li>
          ))}
        </ol>

        <Link
          href="/frames"
          className="inline-flex items-center gap-1.5 rounded-full border border-navy/18 bg-white px-3.5 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
        >
          <span>Full Frame Archive</span>
          <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
}
