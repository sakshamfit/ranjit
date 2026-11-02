import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr/CheckCircle";
import { Clock } from "@phosphor-icons/react/dist/ssr/Clock";
import { UsersThree } from "@phosphor-icons/react/dist/ssr/UsersThree";
import { shootPackages, studioPhotographers } from "@/content/frames";

export function PhotographersAndPackages() {
  return (
    <section
      id="photographers"
      aria-labelledby="photographers-heading"
      data-header-theme="light"
      className="relative border-b border-line bg-white"
    >
      <div className="shell section-pad">
        {/* PART 1: THE PHOTOGRAPHERS & SPECIALIST SHOOT CREW */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-blue">
              <UsersThree size={17} weight="duotone" className="text-orange" aria-hidden="true" />
              <span>Index 04 · The Photographers &amp; Studio Crew</span>
            </p>
            <h2
              id="photographers-heading"
              data-section-heading
              className="type-title balance mt-3 text-ink"
            >
              Led by Ranjit. Scaled with specialist photographers.
            </h2>
          </div>
          <p className="type-lead pretty text-ink-2 lg:col-span-5">
            Intimate portraits, property shoots and mapping flights are handled one-on-one by
            Ranjit. For grand weddings, multi-stage celebrations and commercial productions, Ranjit
            brings his dedicated Sony α7 IV second shooter, gimbal cinematographer and lighting
            wrangler.
          </p>
        </div>

        {/* 4-Card Indexed Crew Roster */}
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {studioPhotographers.map((member, idx) => (
            <li
              key={member.index}
              data-reveal
              style={{ ["--d" as string]: `${idx * 70}ms` }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-line bg-mist/65 p-5 transition-all hover:border-navy/30 hover:bg-white hover:shadow-[0_18px_42px_-26px_rgba(11,61,145,0.25)]"
            >
              {/* Subtle corner frame marks */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-2.5 right-2.5 size-3 border-t-2 border-r-2 border-navy/25 transition-colors group-hover:border-orange"
              />
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="num inline-flex items-center gap-1.5 rounded-md bg-navy px-2.5 py-1 font-mono text-[0.7rem] font-bold tracking-[0.12em] text-white">
                    CREW · {member.index}
                  </span>
                  <span className="rounded-full border border-orange/28 bg-orange/8 px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-orange">
                    {member.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-[1.18rem] font-bold tracking-[-0.015em] text-ink">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[0.84rem] font-semibold text-blue">{member.role}</p>

                <p className="mt-3 rounded-[10px] border border-line bg-white px-3 py-2 font-mono text-[0.71rem] leading-snug text-navy">
                  {member.gear}
                </p>

                <p className="mt-3 text-[0.86rem] leading-relaxed text-ink-2">{member.focus}</p>
              </div>

              <div className="mt-4 border-t border-line pt-3 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-muted">
                {member.availability}
              </div>
            </li>
          ))}
        </ol>

        {/* PART 2: COMMISSION PACKAGES & DELIVERABLES INDEX */}
        <div className="mt-20 border-t border-line pt-16">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <div>
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-blue">
                Commission Index · PKG 01 — 04
              </p>
              <h3 className="mt-2 text-[clamp(1.65rem,3vw,2.35rem)] font-bold leading-tight tracking-[-0.025em] text-ink">
                Clear shoot scopes, camera rigs &amp; turnaround times.
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-[0.84rem] font-semibold text-white transition-colors hover:bg-blue"
            >
              <span>Request Availability &amp; Quote</span>
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {shootPackages.map((pkg, idx) => (
              <article
                key={pkg.code}
                data-reveal
                style={{ ["--d" as string]: `${idx * 80}ms` }}
                className="flex flex-col justify-between rounded-[20px] border border-navy/14 bg-white p-6 shadow-[0_14px_38px_-28px_rgba(6,26,63,0.22)]"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="num rounded-md bg-cloud px-2.5 py-1 font-mono text-[0.72rem] font-bold text-navy">
                        {pkg.index}
                      </span>
                      <span className="num font-mono text-[0.72rem] font-semibold tracking-[0.12em] text-orange">
                        {pkg.code}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-[0.74rem] font-semibold text-navy">
                      <Clock size={14} weight="duotone" className="text-blue" aria-hidden="true" />
                      {pkg.turnaround}
                    </span>
                  </div>

                  <h4 className="mt-4 text-[1.22rem] font-bold tracking-[-0.015em] text-ink">
                    {pkg.title}
                  </h4>
                  <p className="mt-1 text-[0.86rem] text-muted">{pkg.idealFor}</p>

                  <div className="mt-4 grid gap-2 rounded-[12px] border border-line bg-mist/70 p-3.5 text-[0.8rem]">
                    <div>
                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                        Crew Assigned:{" "}
                      </span>
                      <span className="font-semibold text-ink">{pkg.crew}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                        Camera &amp; Optical Rig:{" "}
                      </span>
                      <span className="font-medium text-navy">{pkg.kit}</span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {pkg.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[0.88rem] text-ink-2">
                        <CheckCircle
                          size={17}
                          weight="fill"
                          className="mt-0.5 shrink-0 text-blue"
                          aria-hidden="true"
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
                    Written usage rights included
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-[0.82rem] font-semibold text-navy underline-offset-4 hover:text-orange hover:underline"
                  >
                    <span>Book {pkg.code}</span>
                    <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
