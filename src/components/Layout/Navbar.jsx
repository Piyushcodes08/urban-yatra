import { useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/img/logo/urban-logo2.png";
import menuimg from "../../assets/img/home/menu-img.png";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Menu open ho to navbar always visible + background
    if (menuOpen) {
      setHidden(false);
      setShowBg(true);
      return;
    }

    // Top par navbar visible + transparent
    if (latest < 80) {
      setHidden(false);
      setShowBg(false);
      return;
    }

    // Scroll down = navbar hide + no bg
    if (latest > previous) {
      setHidden(true);
      setShowBg(false);
    }

    // Scroll up = navbar show + bg
    if (latest < previous) {
      setHidden(false);
      setShowBg(true);
    }
  });

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Why Us", path: "/why-us" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);

    if (scrollY.get() < 80) {
      setShowBg(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;

      if (next) {
        setHidden(false);
        setShowBg(true);
      } else if (scrollY.get() < 80) {
        setShowBg(false);
      }

      return next;
    });
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-130%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`fixed left-0 top-0 z-50 w-full py-2 transition-all duration-300 ${
          showBg || menuOpen
            ? "transparent "
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-1">
            <img
              src={logo}
              alt="Urban Yatra Logo"
              className="h-10 w-auto object-contain sm:h-12"
            />

            <div className="flex flex-col items-center justify-center text-base font-bold uppercase italic leading-4 tracking-wide text-white sm:text-xl">
              <span style={{ color: 'var(--brand-orange)' }}>urban</span>
              <span style={{ color: 'var(--brand-yellow)' }}>yatra</span>
            </div>
          </Link>

          <div className="flex items-center gap-6 sm:gap-8">
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative z-50 flex h-12 w-14 items-center justify-center rounded-full"
              aria-label="Toggle menu"
            >
              <span className="relative flex h-6 w-12 flex-col items-center justify-center gap-3">
                <span
                  className={`h-[2px] w-12 rounded-full bg-white transition-all duration-300 ease-in-out ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-[2px] w-12 rounded-full bg-white transition-all duration-300 ease-in-out ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="hidden h-[72px] w-[72px] items-center justify-center rounded-full text-sm font-semibold uppercase text-white transition-all duration-300 lg:inline-flex"
              style={{
                backgroundColor: 'var(--brand-orange)',
                boxShadow: '0 0 22px rgba(254,81,3,0.45)'
              }}
            >
              Book
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu */}
    <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-[80] min-h-screen w-full overflow-hidden  text-white"
    >
      {/* Close + Book Button */}
      <div className="absolute right-5 top-5 z-30 flex items-center gap-8 md:right-10 md:top-8">
        <button
          onClick={closeMenu}
          className="relative flex h-14 w-14 items-center justify-center text-white transition-all duration-300 "
          aria-label="Close menu"
        >
          <span className="absolute h-[1.5px] w-10 rotate-45 bg-white" />
          <span className="absolute h-[1.5px] w-10 -rotate-45 bg-white" />
        </button>

       
      </div>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[60%_40%]">
        {/* Left Image Side */}
        <div className="relative hidden overflow-hidden lg:block">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1.04 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center "
            style={{
              backgroundImage: `url(${menuimg})`,
            }}
          />

        </div>

        {/* Right Content Side */}
        <div className="relative flex min-h-screen flex-col justify-center px-7 py-28 md:px-16 lg:px-20" style={{ backgroundColor: 'var(--brand-blue)' }}>
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.65, ease: "easeOut" }}
            className="max-w-sm"
          >
            {/* Small nav */}
            <ul className="mb-10 space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="block text-xl uppercase tracking-wide transition-colors duration-300 hover:text-[#FE5103]"
                    style={{ color: 'var(--brand-yellow)' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="mb-12 space-y-3 tracking-wide text-sm font-semibold text-[#FECE00]">
              <p>
                <span >T.</span>{" "}
                <a
                  href="tel:+919904229944"
                  className="transition-colors duration-300 hover:text-[#FE5103]"
                >
                  +91 98750 84694
                </a>
              </p>

              <p>
                <span>E.</span>{" "}
                <a
                  href="mailto:info@urbanyatra.com"
                  className="transition-colors duration-300 hover:text-[#FE5103]"
                >
                  urban.yatraa@gmail.com
                </a>
              </p>
            </div>

            {/* Social */}
           <div className="flex flex-wrap gap-3">
  {[
    { name: "Facebook", path: "#", icon: <FaFacebookF /> },
    { name: "Instagram", path: "#", icon: <FaInstagram /> },
    { name: "Linkedin", path: "#", icon: <FaLinkedinIn /> },
    { name: "Youtube", path: "#", icon: <FaYoutube /> },
  ].map((social) => (
    <a
      key={social.name}
      href={social.path}
      aria-label={social.name}
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#b8946b] transition-all duration-300 hover:-translate-y-1 hover:border-[#FE5103]/50 hover:bg-[#FE5103] hover:text-white hover:shadow-[0_12px_28px_rgba(254,81,3,0.3)]"
    >
      <span className="text-base transition-transform duration-300 group-hover:scale-110">
        {social.icon}
      </span>
    </a>
  ))}
</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default Navbar;