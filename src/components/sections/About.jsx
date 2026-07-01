import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import aboutlogo from "../../assets/img/home/about-leftt.png";




const About = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 14,
    mass: 0.2,
  });

  /* White panel shrinks from full-width to 50% revealing the image */
  const panelWidth = useTransform(smoothProgress, [0, 1], ["100%", "20%"]);

  /* Content fades in as panel shrinks */
  const contentOpacity = useTransform(smoothProgress, [0.2, 0.55], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.2, 0.55], [40, 0]);

  return (
    <section ref={sectionRef} className="relative h-[200vh] w-full py-24">
      <div className="sticky top-0 h-screen w-full overflow-hidden text-white">

        {/* decorative floating blobs */}
        <div className="brand-blob floaty" style={{ width: 360, height: 360, left: -80, top: 40, background: 'radial-gradient(circle at 30% 30%, rgba(254,81,3,0.9), rgba(254,206,0,0.15))' }} />
        <div className="brand-blob floaty" style={{ width: 420, height: 420, right: -120, bottom: 40, background: 'radial-gradient(circle at 70% 70%, rgba(0,65,255,0.9), rgba(254,206,0,0.08))' }} />

        {/* ── LEFT IMAGE ── */}
        <div className="absolute left-0 top-0 z-0 hidden h-full w-1/2 overflow-hidden lg:block">
          <img
            src={aboutlogo}
            alt="Urban Yatra About"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* ── WHITE SLIDING PANEL ── */}
        <motion.div
          style={{ width: panelWidth }}
          className="absolute right-0 top-0 z-10 hidden h-full bg-white lg:block"
        />

        {/* ══════════════════════════════════════════
            DESKTOP CONTENT
        ══════════════════════════════════════════ */}
        <motion.div
          
          className="relative z-20 hidden h-full lg:flex"
        >
          <div className="ml-auto flex h-full w-1/2 flex-col justify-center overflow-y-auto px-14 xl:px-20">
            <div className="max-w-lg py-10">

              {/* ── Heading ── */}
              <h2 className="text-[42px] font-black uppercase leading-none tracking-[-0.03em] text-slate-900 md:text-[58px]">
                <span style={{ color: 'var(--brand-blue)' }}>About </span>
                <span style={{ color: 'var(--brand-orange)' }}>Us</span>
              </h2>

              {/* ── Decorative rule ── */}
              <div className="mt-3 flex items-center gap-2">
                <span className="h-0.75 w-8 rounded-full bg-[#FE5103]" />
                <span className="h-2 w-2 rounded-full bg-[#0041FF]" />
                <span className="h-2 w-2 rounded-full bg-[#0041FF]" />
                <span className="h-2 w-2 rounded-full bg-[#0041FF]" />
              </div>

              {/* ── Paragraph 1 ── */}
              <p className="mt-8 text-[16px]  font-medium leading-relaxed text-slate-500">
                <span className="font-bold text-[#FE5103]">Urban Yatra </span>
                provides complete travel solutions across India. Whether you
                want to travel by road, flight, or private vehicle, we arrange
                everything to make your journey comfortable, safe, and
                memorable. We don&apos;t just provide tour packages — we help
                create unforgettable memories.
              </p>

              {/* ── Paragraph 2 ── */}
              <p className="mt-8 text-[16px]  font-medium leading-relaxed text-slate-500">
                To make your journey even more special, we can arrange a
                personal car with a professional driver along with a
                photographer and videographer who can capture your travel
                moments through photos, videos, and reels.
              </p>

              {/* ── Feature Cards ── */}
              {/* <div className="mt-9 grid grid-cols-3 gap-3">
                {featureCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.1 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center rounded-2xl border border-black/10 bg-white px-4 py-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    {card.icon}
                    <p className="mt-4 text-[10px] font-black uppercase tracking-[0.15em] text-black">
                      {card.title}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-5 text-black/50">
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </div> */}

              {/* ── CTA Banner ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative mt-6 flex items-center gap-5 overflow-hidden rounded-2xl bg-[#0041FF] px-6 py-5"
              >
                

                {/* Text */}
                <div>
                  <p className="text-[14px] font-semibold text-white">
                    Your Journey. Our Responsibility.
                  </p>
                  <p className="mt-0.5 text-[12px] text-white/70">
                    Experience India like never before with{" "}
                    <span className="font-bold text-[#FE5103]">Urban Yatra.</span>
                  </p>
                </div>

                {/* Dashed arc + plane */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                  <svg viewBox="0 0 80 50" fill="none" className="h-12 w-16">
                    <path
                      d="M5 45 Q40 5 75 15"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      opacity="0.4"
                    />
                   
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            MOBILE VERSION
        ══════════════════════════════════════════ */}
        <div className="block h-full overflow-y-auto bg-white lg:hidden">
          <div className="h-[45vh] w-full overflow-hidden">
            <img
              src={aboutlogo}
              alt="Urban Yatra About"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="px-6 py-10">
            {/* Heading */}
            <h2 className="text-5xl font-black uppercase leading-tight">
              <span style={{ color: 'var(--brand-blue)' }}>About </span>
              <span style={{ color: 'var(--brand-orange)' }}>Us</span>
            </h2>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-0.75 w-8 rounded-full bg-[#FE5103]" />
              <span className="h-2 w-2 rounded-full bg-[#0041FF]" />
              <span className="h-2 w-2 rounded-full bg-[#0041FF]" />
              <span className="h-2 w-2 rounded-full bg-[#0041FF]" />
            </div>

            <p className="mt-6 text-sm leading-7 text-black/80">
              <span className="font-bold text-[#FE5103]">Urban Yatra </span>
              provides complete travel solutions across India. Whether you want
              to travel by road, flight, or private vehicle, we arrange
              everything to make your journey comfortable, safe, and memorable.
              We don&apos;t just provide tour packages — we help create
              unforgettable memories.
            </p>

            <p className="mt-4 text-sm leading-7 text-black/80">
              To make your journey even more special, we can arrange a personal
              car with a professional driver along with a photographer and
              videographer who can capture your travel moments through photos,
              videos, and reels.
            </p>

            {/* Feature cards */}
           

            {/* CTA banner */}
            <div className="relative mt-6 flex items-center gap-4 overflow-hidden rounded-2xl bg-[#0041FF] px-5 py-4">
              
              <div>
                <p className="text-[13px] font-black text-white">
                  Your Journey. Our Responsibility.
                </p>
                <p className="mt-0.5 text-[11px] text-white/70">
                  Experience India like never before with{" "}
                  <span className="font-bold text-[#FE5103]">Urban Yatra.</span>
                </p>
              </div>
             
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
