import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlassChart,
  faSeedling,
} from "@awesome.me/kit-f3ebbf3b73/icons/sharp/solid";
import { ButtonLink } from "./components/Button";
import { BecomeARewiIderButton } from "./components/BecomeARewiIderButton";
import { HeroSection } from "./components/HeroSection";
import { ParallaxSection } from "./components/ParallaxSection";

const whyItems = [
  {
    icon: faCircleXmark,
    title: "The carbon market is broken.",
    body: 'Companies buy their way to "green" with certificates that mean next to nothing. Trees in tidy little rows. Promises no one verifies. We\'re done with that circus.',
  },
  {
    icon: faMagnifyingGlassChart,
    title: "No bullshit, just data.",
    body: "Every tree has an ID. A location. A growth curve. Everything public. Always. No glossy brochure required — the numbers speak for themselves.",
  },
  {
    icon: faSeedling,
    title: "We don't sell climate neutrality.",
    body: "Because it doesn't exist. We restore depleted land, and CO₂ uptake is a consequence of that. Full stop. That's the most honest thing we can say.",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Selection",
    body: "Not every plot is suitable. We check soil quality, water, ecological potential and legal status. Something off? We don't start. Boring but important.",
  },
  {
    number: "02",
    title: "Restoration",
    body: "No monocultures. Native species, mixed, with attention to the soil and everything living in it. We're building an ecosystem — not counting trees.",
  },
  {
    number: "03",
    title: "Monitoring",
    body: "Satellites, sensors, field measurements, AI. Every tree has an ID. Everything on the dashboard. Live, public, for everyone.",
  },
  {
    number: "04",
    title: "Verification",
    body: "Only after an independent party has checked the data do we issue CO₂ certificates. Not a second sooner.",
  },
];

export default function Home() {
  return (
    <main className="bg-mist text-ink flex flex-col">
      <HeroSection />

      {/* Our Story — Intro — mist bg */}
      <section id="story" className="bg-mist text-ink px-8 py-20 md:px-12">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          <h2
            className="font-extrabold leading-[0.88] tracking-tight text-forest md:w-1/2 shrink-0"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
          >
            The RE:SILVA way.
          </h2>
          <div className="md:w-1/2 space-y-5 text-lg md:text-xl leading-relaxed text-ink/75">
            <p>
              Most "green" projects are a black box. You donate, you get a
              certificate, that's it. Not here. Every tree has an ID. A GPS
              location. Photos. A growth curve you can check live. Become a
              rewilder and see exactly what's growing.
            </p>
          </div>
        </div>
      </section>

      {/* Why RE:SILVA — forest bg */}
      <section className="bg-forest text-mist px-8 py-20 md:px-12 md:pt-28 md:py-28">
        <h2
          className="font-extrabold leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
        >
          Why RE:SILVA?
        </h2>

        <div className="mt-14 md:mt-20 border-t-2 border-sage">
          <div className="grid md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-sage">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="py-12 md:py-14 flex flex-col gap-6 md:px-10 first:md:pl-0 last:md:pr-0"
              >
                <div
                  className="text-sage"
                  style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
                >
                  <FontAwesomeIcon icon={item.icon} fixedWidth />
                </div>
                <div>
                  <h3
                    className="font-extrabold leading-[0.9] tracking-tight"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 2.4rem)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-mist/70 text-lg leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-sage" />
        </div>
      </section>

      {/* Our Story — Intro — mist bg */}
      <section
        id="story"
        className="bg-mist text-ink px-8 py-20 md:px-12 md:py-28"
      >
        <p className="text-sage font-bold tracking-[0.22em] uppercase text-sm mb-3">
          Our story
        </p>
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          <h2
            className="font-extrabold leading-[0.88] tracking-tight text-forest md:w-1/2 shrink-0"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
          >
            How it started.
          </h2>
          <div className="md:w-1/2 space-y-5 text-lg md:text-xl leading-relaxed text-ink/75">
            <p>
              RE:SILVA didn't start in a boardroom. No pitch deck, no whiteboard
              covered in post-its.
            </p>
            <p>
              It started with a lecture on food forests. A campervan rolling
              through Spain. Two friends who knew they wanted something more
              than just… joining in.
            </p>
            <p>
              Tristan and Yondi have been friends for years. Did a permaculture
              course in Portugal together. Saw firsthand how land flourishes
              when you treat it with respect — and what it looks like when
              nobody does.
            </p>
            <p className="font-semibold text-ink">That stuck with them.</p>
          </div>
        </div>
      </section>

      {/* Tristan — forest bg */}
      <section className="bg-forest text-mist">
        <div className="flex flex-col md:flex-row min-h-[85vh]">
          <div className="relative aspect-[3/4] md:aspect-auto md:min-h-0 md:w-[40%]">
            <Image
              src="/images/tristan.webp"
              alt="Tristan, co-founder"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
          <div className="md:w-[60%] px-8 py-14 md:px-12 md:py-20 flex flex-col justify-between">
            <div>
              <h3
                className="font-extrabold leading-[0.85] tracking-tight text-sage"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 7rem)" }}
              >
                Tristan
              </h3>
              <div className="mt-8 space-y-4 text-base md:text-lg leading-relaxed text-mist/80">
                <p>
                  That lecture on food forests changed everything for me. I
                  suddenly understood: this isn't a hobby. This is a solution.
                </p>
                <p>
                  I spent years travelling through Spain in my campervan.
                  Permaculture courses, getting to know the land. And seeing
                  what's actually going on. Whole regions stripped of trees. No
                  water left. Soil that gives nothing.
                </p>
                <p>
                  But also the opposite. Down south, in a national park,
                  everything was green. Full of life. Full of water. The
                  difference? The trees were still standing.
                </p>
                <p>It's not a mystery. It's biology. It can come back.</p>
              </div>
            </div>
            <p className="mt-10 text-sage tracking-[0.18em] text-sm uppercase font-bold">
              — Tristan, co-founder
            </p>
          </div>
        </div>
      </section>

      {/* Yondi — mist bg */}
      <section className="bg-mist text-ink">
        <div className="flex flex-col md:flex-row-reverse min-h-[85vh]">
          <div className="relative aspect-[3/4] md:aspect-auto md:min-h-0 md:w-[40%]">
            <Image
              src="/images/yondi.webp"
              alt="Yondi, co-founder"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
          <div className="md:w-[60%] px-8 py-14 md:px-12 md:py-20 flex flex-col justify-between">
            <div>
              <h3
                className="font-extrabold leading-[0.85] tracking-tight text-forest"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 7rem)" }}
              >
                Yondi
              </h3>
              <div className="mt-8 space-y-4 text-base md:text-lg leading-relaxed text-ink/75">
                <p>
                  I'm 38. Good job in Amsterdam, life in order on paper. And
                  still that nagging feeling: I'm only ever taking.
                </p>
                <p>
                  Tristan showed me how to look at things differently. That
                  permaculture course in Portugal really shifted something in
                  me.
                </p>
                <p>
                  In 40 years' time, I want to look back and see forests that
                  wouldn't have been there without us. Not "I had a great
                  career". But: <em>I left something behind</em>.
                </p>
                <p>For me, RE:SILVA isn't a project. It's a life's work.</p>
              </div>
            </div>
            <p className="mt-10 text-sage tracking-[0.18em] text-sm uppercase font-bold">
              — Yondi, co-founder
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach — forest bg */}
      <section
        id="approach"
        className="bg-forest text-mist px-8 py-20 md:px-12 md:py-28"
      >
        <h2
          className="font-extrabold leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
        >
          Our approach.
        </h2>

        <div className="mt-8 md:mt-10 max-w-2xl space-y-4 text-lg md:text-xl leading-relaxed text-mist/75">
          <p>
            We restore depleted land. Sounds simple. It isn't — but it's not
            rocket science either.
          </p>
          <p>
            No trees in rows. No CO₂ claims before we've measured anything. No
            certificates you have to take on faith.
          </p>
          <p>
            Everything measurable. Everything public. Everything independently
            verified.
          </p>
        </div>

        <div className="mt-14 md:mt-20 border-t-2 border-sage">
          <div className="grid md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-sage">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="py-12 md:py-14 flex flex-col gap-6 md:px-10 first:md:pl-0 last:md:pr-0"
              >
                <span
                  className="font-extrabold text-sage leading-none"
                  style={{ fontSize: "clamp(2rem, 3vw, 3rem)" }}
                >
                  {step.number}
                </span>
                <div>
                  <h3
                    className="font-extrabold leading-[0.9] tracking-tight"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 2.4rem)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-4 text-mist/70 text-lg leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-sage" />
        </div>
      </section>

      {/* Rewilding image break */}
      <ParallaxSection src="/images/rewilding.webp">
        <p
          className="font-extrabold tracking-tight leading-none text-white [text-shadow:_0_2px_24px_rgba(0,0,0,0.5)]"
          style={{ fontSize: "clamp(2.45rem, 6.3vw, 7.7rem)" }}
        >
          RE:SILVA
          <br />
          <span className="text-fern">Rewilding is the answer.</span>
        </p>
      </ParallaxSection>

      {/* Get Involved — mist bg */}
      <section
        id="involved"
        className="bg-mist text-ink px-8 py-20 md:px-12 md:py-28"
      >
        <h2
          className="font-extrabold leading-[0.88] tracking-tight text-forest"
          style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
        >
          Get involved.
        </h2>

        <div className="mt-14 md:mt-20">
          <div className="border-t-2 border-forest grid md:grid-cols-2">
            {/* For you */}
            <div className="pt-12 md:pt-16 pb-14 md:pb-20 md:pr-16 border-b-2 md:border-b-0 md:border-r-2 border-forest flex flex-col justify-between gap-8">
              <div>
                <h3
                  className="font-extrabold leading-[0.88] tracking-tight text-forest"
                  style={{ fontSize: "clamp(1.6rem, 2.8vw, 3.6rem)" }}
                >
                  For you.
                </h3>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
                  <p>
                    You don't need to be a climate scientist. You don't need to
                    run a company. You don't even need to know what a hectare is
                    (we had to look it up too).
                  </p>
                  <p>
                    Become a rewilder from €10. Adopt a tree, give it a name if
                    you like, and follow it on the dashboard — how big, how
                    green, how it's holding up.
                  </p>
                  <p>
                    We're not promising you climate neutrality. We're promising
                    something better: you'll know exactly what happens with your
                    money. Always.
                  </p>
                </div>
              </div>
              <div>
                <BecomeARewiIderButton variant="primary" />
              </div>
            </div>

            {/* For companies */}
            <div className="pt-12 md:pt-16 pb-14 md:pb-20 md:pl-16 flex flex-col justify-between gap-8">
              <div>
                <h3
                  className="font-extrabold leading-[0.88] tracking-tight text-forest"
                  style={{ fontSize: "clamp(1.6rem, 2.8vw, 3.6rem)" }}
                >
                  For companies.
                </h3>
                <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
                  <p>
                    We don't sell offsets. We're building something, and you can
                    be part of it.
                  </p>
                  <p>
                    As a restoration partner, you commit multi-year funding to
                    real projects. You get transparent reports — what's grown,
                    what's been restored, what's been measured. Nothing to hide
                    behind, everything to be honest about.
                  </p>
                  <p>
                    No carbon-neutrality claim. But a story that holds up —
                    internally, externally, to your customers, to your team.
                    Sound like you? Drop us an email. No RFP circus required.
                  </p>
                </div>
              </div>
              <div>
                <ButtonLink
                  href="https://calendly.com/re-silva/30min"
                  variant="secondary"
                >
                  Get in touch
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-forest" />
        </div>
      </section>
    </main>
  );
}
