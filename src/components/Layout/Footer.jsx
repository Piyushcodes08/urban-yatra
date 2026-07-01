import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--brand-blue)' }}>Urban Yatra</h3>
            <p className="mt-4 text-sm text-gray-600">We craft unforgettable journeys across India — tailored itineraries, trusted guides, and seamless support.</p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <p className="text-sm">Phone: <a href="tel:+919875084694" className="text-gray-800">+91 98750 84694</a></p>
            <p className="text-sm mt-2">Email: <a href="mailto:urban.yatraa@gmail.com" className="text-gray-800">urban.yatraa@gmail.com</a></p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Follow</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/5 text-gray-700 hover:bg-[var(--brand-orange)] hover:text-white transition"> <FaFacebookF /> </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/5 text-gray-700 hover:bg-[var(--brand-orange)] hover:text-white transition"> <FaInstagram /> </a>
              <a href="#" aria-label="Linkedin" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/5 text-gray-700 hover:bg-[var(--brand-orange)] hover:text-white transition"> <FaLinkedinIn /> </a>
              <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/5 text-gray-700 hover:bg-[var(--brand-orange)] hover:text-white transition"> <FaYoutube /> </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Urban Yatra — All rights reserved. Designed for production-grade use in India.
        </div>
      </div>
    </footer>
  )
}

export default Footer;