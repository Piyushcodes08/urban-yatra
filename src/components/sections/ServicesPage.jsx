import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SERVICES, CATEGORIES } from "../../data/ServicesData";
import {
  ServiceCard,
  QuotePlanner,
  ServiceDetailsModal,
  InquiryForm,
} from "./ServicesComponents";

const ServicesPage = () => {
  /* ── filter ── */
  const [activeCategory, setActiveCategory] = useState("all");

  /* ── selected services for planner ── */
  const [selectedIds, setSelectedIds] = useState([]);

  /* ── modal ── */
  const [modalService, setModalService] = useState(null);

  /* ── planner inputs ── */
  const [duration, setDuration] = useState(5);
  const [travelers, setTravelers] = useState(2);

  /* ── inquiry form ── */
  const [travelDate, setTravelDate] = useState("");
  const inquiryRef = useRef(null);

  const filtered =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const selectedServices = SERVICES.filter((s) => selectedIds.includes(s.id));

  const toggleSelect = (id) =>
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  const scrollToInquiry = () =>
    inquiryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="min-h-screen w-full bg-[#FECE00] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div className="mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#FE5103]"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[42px] font-black uppercase leading-none tracking-[-0.03em] text-slate-900 md:text-[58px]"
          >
            Our{" "}
            <span className="text-[#0041FF]">Premium</span>{" "}
            <span className="text-[#FE5103]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-[16px] font-medium leading-relaxed text-slate-500"
          >
            From seamless transit logistics to high-end social media content
            creation — we ensure every moment of your journey is perfect.
          </motion.p>
        </div>

        {/* ── Category Filter ── */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-[#0041FF] bg-[#0041FF] text-white shadow-lg shadow-[#0041FF]/20"
                  : "border-slate-200 bg-white text-slate-500 hover:border-[#0041FF]/40 hover:text-[#0041FF]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Main grid + sidebar ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                onViewDetails={setModalService}
                onToggleSelect={toggleSelect}
                isSelected={selectedIds.includes(service.id)}
              />
            ))}
          </div>

          {/* Quote Planner sidebar */}
          <div className="hidden lg:block">
            <QuotePlanner
              selectedServices={selectedServices}
              duration={duration}
              setDuration={setDuration}
              travelers={travelers}
              setTravelers={setTravelers}
              onRemoveService={(id) =>
                setSelectedIds((prev) => prev.filter((i) => i !== id))
              }
              onScrollToInquiry={scrollToInquiry}
            />
          </div>
        </div>

        {/* Mobile planner */}
        {selectedIds.length > 0 && (
          <div className="mt-8 lg:hidden">
            <QuotePlanner
              selectedServices={selectedServices}
              duration={duration}
              setDuration={setDuration}
              travelers={travelers}
              setTravelers={setTravelers}
              onRemoveService={(id) =>
                setSelectedIds((prev) => prev.filter((i) => i !== id))
              }
              onScrollToInquiry={scrollToInquiry}
            />
          </div>
        )}

        {/* ── Inquiry Form ── */}
        <div ref={inquiryRef} className="mt-20">
          <InquiryForm
            allServices={SERVICES}
            selectedServiceIds={selectedIds}
            onToggleService={toggleSelect}
            travelersCount={travelers}
            travelDate={travelDate}
            setTravelDate={setTravelDate}
            onSubmitSuccess={() => setSelectedIds([])}
          />
        </div>
      </div>

      {/* ── Detail Modal ── */}
      <ServiceDetailsModal
        service={modalService}
        isOpen={!!modalService}
        onClose={() => setModalService(null)}
        onToggleSelect={toggleSelect}
        isSelected={modalService ? selectedIds.includes(modalService.id) : false}
      />
    </section>
  );
};

export default ServicesPage;
