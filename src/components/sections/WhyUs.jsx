import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const reasons = [
  "Personalized Travel Reels & Professional Photography included",
  "Dedicated Personal Car with Experienced Driver",
  "100% Customized Itineraries Tailored to Your Pace",
  "Comprehensive Pan-India Coverage",
  "24/7 On-Trip Support & Assistance",
];

const WhyUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full bg-[#0041FF] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        ref={ref}
        className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >

        {/* ── LEFT — Text ── */}
        <div>
          {/* eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#FE5103]"
          >
            The Urban Yatra Difference
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[38px] font-black leading-[1.05] tracking-[-0.02em] text-white md:text-[52px]"
          >
            Why Travel <span className="text-[#FECE00]">With Us?</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-md text-[14px] font-medium leading-[1.85] text-white/65"
          >
            We believe true luxury lies in personalization and peace of mind.
            Here's what sets us apart from conventional travel agencies.
          </motion.p>

          {/* Reasons list */}
          <ul className="mt-9 space-y-5">
            {reasons.map((reason, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.28 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-4"
              >
                {/* Orange chevron bullet */}
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FE5103] text-white shadow-md shadow-[#FE5103]/40">
                  <FaChevronRight className="text-[9px]" />
                </span>
                <span className="text-[14px] font-semibold leading-[1.7] text-white">
                  {reason}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT — Two staggered images ── */}
        <div className="relative flex justify-center items-center h-85 sm:h-100 lg:h-105 overflow-hidden">

          {/* Back image — Rajasthan palace */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 2 } : {}}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-6 h-65 w-[52%] sm:h-75 sm:w-[48%] overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80"
              alt="Rajasthan palace at sunset"
              className="h-full w-full object-cover"
            />
            
          </motion.div>

          {/* Front image — Kerala backwaters */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={inView ? { opacity: 1, y: 0, rotate: 2 } : {}}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 bottom-0 h-60 w-[52%] sm:h-70 sm:w-[48%] overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80"
              alt="Kerala backwaters at dusk"
              className="h-full w-full object-cover"
            />
           
          </motion.div>

          {/* Floating orange badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-2 left-[44%] z-10 -translate-x-1/2 rounded-2xl bg-[#FE5103] px-4 py-2 text-center "
          >
            <p className="text-[11px] font-black uppercase tracking-[0.15em] text-white">
              Pan-India
            </p>
            <p className="text-[10px] font-semibold text-white/75">Coverage</p>
          </motion.div>
        </div>

      </div>

      {/* ══════════════════════════════════════
          Journeys For Everyone sub-section
      ══════════════════════════════════════ */}
      <JourneysForEveryone />

    </section>
  );
};

/* ── Traveler type pills ── */
const travelerTypes = [
  "Families",
  "Couples & Honeymooners",
  "Solo Travelers",
  "Friend Groups",
  "Corporate Clients",
  "Pilgrims",
];

const JourneysForEveryone = () => {
  const jRef = useRef(null);
  const jInView = useInView(jRef, { once: true, margin: "-60px" });

  return (
    <div
      ref={jRef}
      className="mt-14 w-full bg-white px-4 py-16 sm:px-6 lg:px-8 rounded-3xl"
    >
      <div className="mx-auto max-w-4xl text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={jInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-[32px] font-black leading-tight tracking-[-0.02em] text-[#0a1172] md:text-[42px]"
        >
          Journeys For <span className='text-[#FECE00]'> Everyone </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={jInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-3 max-w-md text-[16px] font-medium leading-relaxed text-slate-400"
        >
          We craft specialized experiences for every type of traveler.
        </motion.p>

        {/* Pill tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {travelerTypes.map((type, i) => (
            <motion.span
              key={type}
              initial={{ opacity: 0, scale: 0.85, y: 12 }}
              animate={jInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.2 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.06,
                backgroundColor: "transparent",
                color: "#FE5103",
                borderColor: "#FE5103",
                transition: { duration: 0.2 },
              }}
              className="cursor-default rounded-full border border-[#0a1172] px-6 py-2.5 text-[16px] font-semibold text-[#0a1172] "
            >
              {type}
            </motion.span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyUs;
