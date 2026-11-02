"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Aperture } from "@phosphor-icons/react/dist/ssr/Aperture";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { ArrowsOutSimple } from "@phosphor-icons/react/dist/ssr/ArrowsOutSimple";
import { CornersOut } from "@phosphor-icons/react/dist/ssr/CornersOut";
import { GridFour } from "@phosphor-icons/react/dist/ssr/GridFour";
import { ListNumbers } from "@phosphor-icons/react/dist/ssr/ListNumbers";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { X } from "@phosphor-icons/react/dist/ssr/X";
import {
  frameCategories,
  framesArchive,
  type FrameCategory,
  type FrameEntry,
} from "@/content/frames";

type ViewMode = "frames" | "index";

export function FramesAndIndexSection({
  headingAs = "h2",
  eyebrow = "Index 03 · Selected Contact Frames & Archive",
  limit,
}: {
  headingAs?: "h1" | "h2";
  eyebrow?: string;
  limit?: number;
}) {
  const [activeCategory, setActiveCategory] = useState<FrameCategory>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("frames");
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  const visibleFrames = useMemo(() => {
    const filtered =
      activeCategory === "all"
        ? framesArchive
        : framesArchive.filter((f) => f.category === activeCategory);
    return limit && activeCategory === "all" ? filtered.slice(0, limit) : filtered;
  }, [activeCategory, limit]);

  const categoryCounts = useMemo(() => {
    const map: Record<FrameCategory, number> = {
      all: framesArchive.length,
      weddings: 0,
      portraits: 0,
      heritage: 0,
      aerial: 0,
    };
    for (const f of framesArchive) {
      map[f.category] += 1;
    }
    return map;
  }, []);

  const selectedIndex = useMemo(
    () => visibleFrames.findIndex((f) => f.code === selectedCode),
    [visibleFrames, selectedCode],
  );

  const selectedFrame: FrameEntry | null =
    selectedIndex >= 0
      ? visibleFrames[selectedIndex]
      : framesArchive.find((f) => f.code === selectedCode) ?? null;

  const stepLightbox = useCallback(
    (delta: 1 | -1) => {
      const pool = visibleFrames.length > 0 ? visibleFrames : framesArchive;
      const curIdx = pool.findIndex((f) => f.code === selectedCode);
      if (curIdx === -1) return;
      const next = (curIdx + delta + pool.length) % pool.length;
      setSelectedCode(pool[next].code);
    },
    [visibleFrames, selectedCode],
  );

  useEffect(() => {
    if (!selectedCode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCode(null);
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedCode, stepLightbox]);

  const HeadingTag = headingAs;

  return (
    <section
      id="frames"
      aria-labelledby="frames-section-heading"
      data-header-theme="light"
      className="relative border-b border-line bg-mist/60"
    >
      <div className="shell section-pad">
        {/* Header */}
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-blue">
              <CornersOut size={15} weight="bold" className="text-orange" aria-hidden="true" />
              <span>{eyebrow}</span>
            </p>
            <HeadingTag
              id="frames-section-heading"
              data-section-heading
              className="type-title balance mt-2.5 text-ink"
            >
              Curated frames &amp; optical index.
            </HeadingTag>
          </div>
          <p className="type-lead pretty text-ink-2 lg:col-span-5">
            Four signature 3:2 plates logged with negative code, lens and exposure data. Toggle
            between <strong className="font-semibold text-ink">Contact Frames</strong> and the{" "}
            <strong className="font-semibold text-ink">Master Index</strong>, or click any frame to
            inspect.
          </p>
        </div>

        {/* Filter Index Pills + View Mode Switcher */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-line bg-white p-2.5 shadow-[0_10px_26px_-22px_rgba(11,61,145,0.18)]">
          <div
            role="tablist"
            aria-label="Filter frames by genre index"
            className="flex flex-wrap items-center gap-1.5"
          >
            {frameCategories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.76rem] font-semibold transition-all ${
                    active
                      ? "bg-navy text-white shadow-xs"
                      : "bg-mist/85 text-ink-2 hover:bg-cloud hover:text-navy"
                  }`}
                >
                  <span
                    className={`num text-[0.63rem] tracking-[0.09em] ${
                      active ? "text-orange" : "text-muted"
                    }`}
                  >
                    {cat.code}
                  </span>
                  <span>{cat.label}</span>
                  <span
                    className={`num rounded-full px-1.5 py-0.5 text-[0.64rem] ${
                      active ? "bg-white/16 text-white" : "bg-white text-navy"
                    }`}
                  >
                    0{categoryCounts[cat.id]}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="group"
            aria-label="Archive display mode"
            className="inline-flex items-center rounded-full border border-line bg-mist p-1"
          >
            <button
              type="button"
              aria-pressed={viewMode === "frames"}
              onClick={() => setViewMode("frames")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.74rem] font-semibold transition-colors ${
                viewMode === "frames"
                  ? "bg-white text-navy shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              <GridFour size={14} weight="duotone" aria-hidden="true" />
              <span>Contact Frames</span>
            </button>
            <button
              type="button"
              aria-pressed={viewMode === "index"}
              onClick={() => setViewMode("index")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.74rem] font-semibold transition-colors ${
                viewMode === "index"
                  ? "bg-white text-navy shadow-xs"
                  : "text-muted hover:text-ink"
              }`}
            >
              <ListNumbers size={14} weight="duotone" aria-hidden="true" />
              <span>Master Index</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: SYMMETRIC 2x2 MATTED 3:2 CONTACT SHEET FRAMES */}
        {viewMode === "frames" ? (
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {visibleFrames.map((frame) => (
              <article
                key={frame.code}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-[18px] border border-navy/14 bg-white p-3.5 shadow-[0_14px_36px_-26px_rgba(6,26,63,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/35 hover:shadow-[0_20px_46px_-24px_rgba(6,26,63,0.28)]"
              >
                <div>
                  {/* Top film rebate bar */}
                  <div className="mb-2.5 flex items-center justify-between gap-2 border-b border-line pb-2">
                    <div className="flex items-center gap-2">
                      <span className="num inline-flex items-center gap-1.5 rounded bg-navy-950 px-2 py-0.5 font-mono text-[0.65rem] font-semibold tracking-[0.12em] text-white">
                        <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
                        FRM · {frame.index}
                      </span>
                      <span className="num font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted">
                        {frame.code}
                      </span>
                    </div>
                    <span className="rounded-full border border-blue/18 bg-cloud/75 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-navy">
                      {frame.categoryLabel}
                    </span>
                  </div>

                  {/* True 3:2 Archival Matted Frame with Precision Corner Reticles */}
                  <button
                    type="button"
                    onClick={() => setSelectedCode(frame.code)}
                    aria-label={`Inspect frame ${frame.index}: ${frame.title}`}
                    className="relative block w-full overflow-hidden rounded-[12px] border border-line bg-mist p-2 text-left transition-colors group-hover:bg-cloud/55"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1 left-1 z-10 size-2.5 border-t-2 border-l-2 border-navy/45 transition-colors group-hover:border-orange"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1 right-1 z-10 size-2.5 border-t-2 border-r-2 border-navy/45 transition-colors group-hover:border-orange"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-1 left-1 z-10 size-2.5 border-b-2 border-l-2 border-navy/45 transition-colors group-hover:border-orange"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-1 bottom-1 z-10 size-2.5 border-r-2 border-b-2 border-navy/45 transition-colors group-hover:border-orange"
                    />

                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[8px] bg-navy-950">
                      <Image
                        src={frame.src}
                        alt={`${frame.title} — ${frame.camera} (${frame.lens})`}
                        fill
                        sizes="(min-width: 1024px) 540px, (min-width: 768px) 46vw, 94vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="pointer-events-none absolute right-2.5 bottom-2.5 inline-flex items-center gap-1 rounded-full bg-navy-950/82 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-white backdrop-blur-sm transition-colors group-hover:bg-orange">
                        <ArrowsOutSimple size={11} weight="bold" aria-hidden="true" />
                        <span>Inspect</span>
                      </span>
                    </div>
                  </button>

                  {/* Aligned Caption + Concise 2-line Story */}
                  <div className="mt-3.5 px-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-[1.05rem] font-semibold tracking-[-0.015em] text-ink">
                        {frame.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[0.74rem] font-medium text-muted">
                        <MapPin size={12} weight="duotone" className="text-blue" aria-hidden="true" />
                        {frame.location}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-[0.85rem] leading-relaxed text-ink-2">
                      {frame.story}
                    </p>
                  </div>
                </div>

                {/* Single-row Compact EXIF Strip */}
                <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 rounded-[10px] border border-line bg-mist/75 px-3 py-1.5 font-mono text-[0.68rem] text-ink-2">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-navy">
                    <Aperture size={12} weight="bold" className="text-orange" aria-hidden="true" />
                    {frame.camera} · {frame.lens}
                  </span>
                  <span className="num font-medium text-muted">
                    {frame.focal} · {frame.aperture} · {frame.shutter} · {frame.iso}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* VIEW 2: MASTER ARCHIVE INDEX TABLE */
          <div className="mt-7 overflow-hidden rounded-[18px] border border-navy/15 bg-white shadow-[0_16px_38px_-26px_rgba(6,26,63,0.18)]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-navy-950 px-5 py-3 text-white">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-orange" aria-hidden="true" />
                <span className="num font-mono text-[0.7rem] font-semibold uppercase tracking-[0.15em]">
                  Master Contact Index · 0{visibleFrames.length} Plates
                </span>
              </div>
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.13em] text-white/65">
                Click any row to open optical loupe
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[740px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line bg-mist/85 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    <th className="py-3 pr-3 pl-5">IDX</th>
                    <th className="px-3 py-3">Plate</th>
                    <th className="px-3 py-3">Frame &amp; Location</th>
                    <th className="px-3 py-3">Camera &amp; Optics</th>
                    <th className="px-3 py-3">Exposure</th>
                    <th className="py-3 pr-5 pl-3 text-right">Inspect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-[0.84rem]">
                  {visibleFrames.map((frame) => (
                    <tr
                      key={frame.code}
                      onClick={() => setSelectedCode(frame.code)}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedCode(frame.code);
                        }
                      }}
                      aria-label={`Inspect plate ${frame.index}: ${frame.title}`}
                      className="group cursor-pointer transition-colors hover:bg-cloud/55 focus-visible:bg-cloud/70 focus-visible:outline-none"
                    >
                      <td className="py-3 pr-3 pl-5 align-middle">
                        <span className="num inline-flex rounded border border-navy/16 bg-mist px-2 py-0.5 font-mono text-[0.72rem] font-bold text-navy group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                          {frame.index}
                        </span>
                        <span className="num mt-0.5 block font-mono text-[0.62rem] text-muted">
                          {frame.code}
                        </span>
                      </td>
                      <td className="px-3 py-3 align-middle">
                        <div className="relative aspect-[3/2] w-20 overflow-hidden rounded-[6px] border border-navy/16 bg-mist p-0.5">
                          <Image
                            src={frame.src}
                            alt={frame.title}
                            fill
                            sizes="80px"
                            className="rounded-[4px] object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </td>
                      <td className="px-3 py-3 align-middle">
                        <p className="font-semibold text-ink group-hover:text-navy">
                          {frame.title}
                        </p>
                        <p className="mt-0.5 text-[0.74rem] text-muted">
                          {frame.categoryLabel} · {frame.location}
                        </p>
                      </td>
                      <td className="px-3 py-3 align-middle">
                        <p className="font-medium text-navy">{frame.camera}</p>
                        <p className="mt-0.5 font-mono text-[0.72rem] text-ink-2">{frame.lens}</p>
                      </td>
                      <td className="px-3 py-3 align-middle font-mono text-[0.73rem] text-ink-2">
                        <span className="num block font-semibold text-ink">
                          {frame.focal} · {frame.aperture} · {frame.shutter}
                        </span>
                        <span className="num mt-0.5 block text-[0.66rem] text-muted">
                          {frame.iso} · {frame.profile}
                        </span>
                      </td>
                      <td className="py-3 pr-5 pl-3 text-right align-middle">
                        <span className="inline-flex items-center gap-1 rounded-full border border-navy/18 bg-white px-2.5 py-1 text-[0.7rem] font-semibold text-navy transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                          <span>Loupe</span>
                          <ArrowsOutSimple size={11} weight="bold" aria-hidden="true" />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {limit && activeCategory === "all" && framesArchive.length > limit ? (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[14px] border border-line bg-white px-4 py-3">
            <p className="font-mono text-[0.73rem] text-muted">
              Showing <span className="num font-semibold text-navy">0{limit}</span> of{" "}
              <span className="num font-semibold text-navy">0{framesArchive.length}</span> curated
              plates on the home overview.
            </p>
            <Link
              href="/frames"
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-[0.76rem] font-semibold text-white transition-colors hover:bg-blue"
            >
              <span>Open All 0{framesArchive.length} Plates &amp; Master Index</span>
              <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>

      {/* DARKROOM OPTICAL LIGHTBOX LOUPE MODAL */}
      {selectedFrame ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-frame-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/92 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedCode(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[20px] border border-white/15 bg-navy-950 p-4 text-white shadow-2xl sm:p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="num inline-flex items-center rounded bg-orange px-2.5 py-0.5 font-mono text-[0.7rem] font-bold tracking-[0.12em] text-white">
                  FRM · {selectedFrame.index}
                </span>
                <span className="num font-mono text-[0.72rem] tracking-[0.1em] text-white/70">
                  {selectedFrame.code} · {selectedFrame.categoryLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => stepLightbox(-1)}
                  aria-label="Previous plate"
                  className="inline-flex size-8.5 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white transition-colors hover:bg-white/20"
                >
                  <ArrowLeft size={15} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => stepLightbox(1)}
                  aria-label="Next plate"
                  className="inline-flex size-8.5 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white transition-colors hover:bg-white/20"
                >
                  <ArrowRight size={15} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCode(null)}
                  aria-label="Close plate inspector"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/22 bg-white/12 px-3 py-1 text-[0.74rem] font-semibold text-white transition-colors hover:bg-orange"
                >
                  <X size={13} weight="bold" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            <div className="mt-4 grid gap-5 lg:grid-cols-12 lg:items-center">
              <div className="relative overflow-hidden rounded-[12px] border border-white/15 bg-black p-2 lg:col-span-7">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1.5 left-1.5 z-10 size-3 border-t-2 border-l-2 border-orange"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1.5 right-1.5 z-10 size-3 border-t-2 border-r-2 border-orange"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-1.5 left-1.5 z-10 size-3 border-b-2 border-l-2 border-orange"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-1.5 bottom-1.5 z-10 size-3 border-r-2 border-b-2 border-orange"
                />
                <Image
                  src={selectedFrame.src}
                  alt={selectedFrame.title}
                  width={selectedFrame.width}
                  height={selectedFrame.height}
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="max-h-[56vh] w-full rounded-[6px] object-contain"
                />
              </div>

              <div className="space-y-3.5 lg:col-span-5">
                <div>
                  <h3 id="lightbox-frame-title" className="text-[1.22rem] font-bold leading-snug text-white">
                    {selectedFrame.title}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-[0.8rem] text-white/70">
                    <MapPin size={13} weight="duotone" className="text-orange" aria-hidden="true" />
                    {selectedFrame.location}
                  </p>
                </div>

                <p className="text-[0.86rem] leading-relaxed text-white/82">
                  {selectedFrame.story}
                </p>

                <dl className="grid grid-cols-2 gap-2 rounded-[12px] border border-white/12 bg-white/5 p-3 font-mono text-[0.7rem]">
                  <div>
                    <dt className="text-white/50">CAMERA</dt>
                    <dd className="mt-0.5 font-semibold text-white">{selectedFrame.camera}</dd>
                  </div>
                  <div>
                    <dt className="text-white/50">OPTICS</dt>
                    <dd className="mt-0.5 font-semibold text-white">{selectedFrame.lens}</dd>
                  </div>
                  <div>
                    <dt className="text-white/50">EXPOSURE</dt>
                    <dd className="num mt-0.5 font-semibold text-orange">
                      {selectedFrame.focal} · {selectedFrame.aperture} · {selectedFrame.shutter}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-white/50">PROFILE</dt>
                    <dd className="num mt-0.5 font-semibold text-white">
                      {selectedFrame.iso} · {selectedFrame.profile}
                    </dd>
                  </div>
                </dl>

                <div className="rounded-[10px] border border-orange/30 bg-orange/12 p-2.5 text-[0.76rem] text-white/90">
                  <span className="block font-mono text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-orange">
                    Client Deliverable
                  </span>
                  <span className="mt-0.5 block">{selectedFrame.deliverable}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
