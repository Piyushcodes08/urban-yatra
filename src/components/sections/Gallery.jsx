import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=85",
    alt: "Himalayan peaks",
    label: "Himalayas",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=85",
    alt: "South Indian temple",
    label: "Temple Heritage",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=85",
    alt: "Luxury desert camp under stars",
    label: "Desert Nights",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    alt: "Tropical beach sunset",
    label: "Beach Bliss",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85",
    alt: "Kerala backwaters",
    label: "Kerala Backwaters",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=85",
    alt: "Rajasthan palace",
    label: "Rajasthan Royale",
    span: "",
  },
];

/* ── Lightbox ── */
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 px-4"
    onClick={onClose}
  >
    {/* Close */}
    <button
      onClick={onClose}
      className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
    >
      <FaTimes />
    </button>

    {/* Prev */}
    <button
      onClick={(e) => { e.stopPropagation(); onPrev(); }}
      className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FE5103]"
    >
      <FaChevronLeft />
    </button>

    {/* Image */}
    <motion.img
      key={index}
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      src={images[index].src}
      alt={images[index].alt}
      onClick={(e) => e.stopPropagation()}
      className="max-h-[80vh] max-w-4xl w-full rounded-2xl object-contain shadow-2xl"
    />

    {/* Next */}
    <button
      onClick={(e) => { e.stopPropagation(); onNext(); }}
      className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FE5103]"
    >
      <FaChevronRight />
    </button>

    {/* Counter */}
    <p className="absolute bottom-5 text-[12px] font-bold tracking-widest text-white/50">
      {index + 1} / {images.length}
    </p>
  </motion.div>
);

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % images.length);

  // Keyboard navigation + preload when lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    // Preload neighbors
    const preload = (src) => { const i = new Image(); i.src = src; };
    preload(images[(lightboxIndex + 1) % images.length].src);
    preload(images[(lightboxIndex - 1 + images.length) % images.length].src);

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex]);

  return (
    <>
      <section className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">

          {/* ── Header ── */}
          <div ref={ref} className="mb-14 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-[#FE5103]"
            >
              Captured Moments
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[36px] font-black leading-tight tracking-[-0.02em] text-[#0041FF] md:text-[52px]"
            >
              Incredible India <span className="text-[#FECE00]">Awaits</span>
            </motion.h2>

            {/* orange underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 block mx-auto h-1 w-16 origin-center rounded-full bg-[#FE5103]"
            />
          </div>

          {/* ── Grid — 4 equal columns matching reference ── */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {images.slice(0, 4).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.1 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => openLightbox(i)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md"
                whileHover={{ scale: 1.02 }}
                layout
                style={{ aspectRatio: "3/4" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(to top, rgba(0,65,255,0.72), rgba(0,65,255,0.14) 30%, transparent 60%)' }}
                />

                {/* Label */}
                <motion.span
                  className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2"
                  style={{ color: 'var(--brand-blue)' }}
                >
                  {img.label}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* ── Second row — 2 wider images ── */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {images.slice(4).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.5 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => openLightbox(i + 4)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md"
                whileHover={{ scale: 1.02 }}
                layout
                style={{ aspectRatio: "16/7" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(to top, rgba(0,65,255,0.72), rgba(0,65,255,0.14) 30%, transparent 60%)' }}
                />
                <motion.span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-[#0041FF] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {img.label}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 text-center"
          >
            <a
              href="/gallery"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#0041FF] px-9 py-3.5 text-[13px] font-black uppercase tracking-[0.18em] text-[#0041FF] transition-all duration-300 hover:bg-[#0041FF] hover:text-white hover:shadow-lg hover:shadow-[#0041FF]/20"
            >
              View Full Gallery
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
