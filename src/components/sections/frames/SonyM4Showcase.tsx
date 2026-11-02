import Image from "next/image";
import Link from "next/link";
import { Aperture } from "@phosphor-icons/react/dist/ssr/Aperture";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { Camera } from "@phosphor-icons/react/dist/ssr/Camera";
import { sonyM4Profile } from "@/content/frames";

export function SonyM4Showcase() {
  return (
    <section
      id="sony-m4"
      aria-labelledby="sony-m4-heading"
      data-header-theme="light"
      className="relative overflow-hidden border-b border-line bg-white"
    >
      <div className="shell section-pad">
        {/* Top index rail */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4"
          data-reveal
        >
          <p className="inline-flex items-center gap-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-blue">
            <Camera size={16} weight="duotone" className="text-orange" aria-hidden="true" />
            <span>{sonyM4Profile.eyebrow}</span>
          </p>
          <div className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-muted">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange/30 bg-orange/8 px-3 py-1 text-orange">
              <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
              {sonyM4Profile.badge}
            </span>
            <span className="num hidden sm:inline">FE G MASTER · S-LOG3 · DUAL CFEXPRESS-A</span>
          </div>
        </div>

        <div className="mt-10 grid items-start gap-9 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          {/* Left column (4 cols, constrained width): Unobstructed 4:5 Optical Viewfinder Frame */}
          <div className="lg:col-span-4" data-reveal="rise">
            <figure className="group mx-auto w-full max-w-[21.5rem] overflow-hidden rounded-[20px] border border-navy/15 bg-navy-950 p-3 shadow-[0_22px_52px_-28px_rgba(6,26,63,0.42)] lg:mx-0">
              {/* Top viewfinder HUD strip */}
              <div className="mb-2 flex items-center justify-between px-1 font-mono text-[0.64rem] tracking-[0.13em] text-white/75">
                <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                  <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
                  α7M4 · RAW+4K
                </span>
                <span className="text-white/55">[EYE-AF]</span>
                <span className="num text-orange">FRM · 00</span>
              </div>

              {/* Clean 4:5 Matted Optical Frame — NO overlay blocking Ranjit's camera */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] border border-white/15 bg-navy-900">
                <Image
                  src={sonyM4Profile.portrait.src}
                  alt={sonyM4Profile.portrait.alt}
                  fill
                  sizes="(min-width: 1024px) 340px, 85vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                {/* Crisp optical corner reticle ticks */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2.5 left-2.5 size-3.5 border-t-2 border-l-2 border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-2.5 right-2.5 size-3.5 border-t-2 border-r-2 border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-2.5 left-2.5 size-3.5 border-b-2 border-l-2 border-white/80"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2.5 bottom-2.5 size-3.5 border-r-2 border-b-2 border-white/80"
                />
              </div>

              {/* Bottom optical EXIF strip placed cleanly BELOW the image */}
              <figcaption className="mt-2.5 space-y-1 px-1">
                <div className="flex items-center justify-between font-mono text-[0.65rem] tracking-[0.09em] text-white/88">
                  <span>ILCE-7M4 · FE 24–70mm GM II</span>
                  <span className="num text-orange">f/2.8 · 1/500s</span>
                </div>
                <p className="text-[0.74rem] text-white/62">
                  Ranjit on set — Golden-hour sandstone courtyard
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Right column (8 cols): Copy + 4 Technical Spec Tiles + Numbered Lens & Rig Index */}
          <div className="lg:col-span-8">
            <h2
              id="sony-m4-heading"
              data-section-heading
              className="type-title balance text-ink"
              data-reveal
              style={{ ["--d" as string]: "60ms" }}
            >
              <span className="block">{sonyM4Profile.headline[0]}</span>
              <span className="block text-navy">{sonyM4Profile.headline[1]}</span>
            </h2>

            <p
              className="type-lead pretty mt-4 max-w-[44rem] text-ink-2"
              data-reveal
              style={{ ["--d" as string]: "130ms" }}
            >
              {sonyM4Profile.lead}
            </p>

            {/* 4-tile optical readout strip */}
            <dl
              className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4"
              data-reveal
              style={{ ["--d" as string]: "190ms" }}
            >
              {sonyM4Profile.specs.map((spec) => (
                <div
                  key={spec.code}
                  className="rounded-[14px] border border-line bg-mist/75 p-3.5 transition-colors hover:border-navy/28 hover:bg-cloud/60"
                >
                  <div className="flex items-center justify-between text-[0.63rem] font-semibold uppercase tracking-[0.14em] text-muted">
                    <span>{spec.label}</span>
                    <span className="num text-orange">{spec.code}</span>
                  </div>
                  <dd className="num mt-1.5 text-[1.35rem] font-bold leading-none tracking-[-0.02em] text-navy">
                    {spec.value}
                  </dd>
                  <dt className="mt-1.5 text-[0.74rem] leading-snug text-ink-2">{spec.detail}</dt>
                </div>
              ))}
            </dl>

            {/* Optical Lens & Hybrid Rig Index (01 — 05) */}
            <div
              className="mt-7 overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_14px_34px_-24px_rgba(11,61,145,0.16)]"
              data-reveal
              style={{ ["--d" as string]: "250ms" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-mist/70 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2">
                  <Aperture size={15} weight="duotone" className="text-blue" aria-hidden="true" />
                  <h3 className="text-[0.74rem] font-semibold uppercase tracking-[0.15em] text-navy">
                    Optical Glass &amp; Hybrid Rig Index
                  </h3>
                </div>
                <span className="num text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  IDX 01 — 05 · SERIAL CALIBRATED
                </span>
              </div>

              <ol className="divide-y divide-line">
                {sonyM4Profile.lensIndex.map((item) => (
                  <li
                    key={item.index}
                    className="grid gap-1.5 px-4 py-3 transition-colors hover:bg-mist/55 sm:grid-cols-[2.2rem_minmax(0,1.2fr)_minmax(0,1.4fr)] sm:items-center sm:gap-4 sm:px-5"
                  >
                    <span className="num inline-flex size-6.5 items-center justify-center rounded-md border border-navy/16 bg-cloud/70 text-[0.7rem] font-bold text-navy">
                      {item.index}
                    </span>
                    <div>
                      <p className="text-[0.9rem] font-semibold text-ink">{item.model}</p>
                      <p className="num mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.09em] text-blue">
                        {item.role} · {item.focal}
                      </p>
                    </div>
                    <p className="text-[0.82rem] leading-relaxed text-ink-2">{item.use}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div
              className="mt-5 flex flex-wrap items-center gap-4"
              data-reveal
              style={{ ["--d" as string]: "300ms" }}
            >
              <Link
                href="/projects/sony-m4-photography"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[0.82rem] font-semibold text-white transition-colors hover:bg-blue"
              >
                <span>Read Sony M4 Case Study</span>
                <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
              </Link>
              <Link
                href="/skills"
                className="inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-navy underline-offset-4 hover:underline"
              >
                <span>Explore full camera &amp; drone kit</span>
                <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
