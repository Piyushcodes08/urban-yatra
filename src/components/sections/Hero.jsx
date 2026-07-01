import React from "react";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src="src/assets/video/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
                <div className="max-w-4xl">
                    <div>
                        <p className="mb-4 font-extrabold uppercase tracking-[0.35em]" style={{ color: 'var(--brand-orange)' }}>
                            Explore with us
                        </p>
                        <h1 className="mb-6 text-xl font-bold uppercase italic leading-tight md:text-4xl tracking-wide" style={{ color: 'var(--brand-yellow)' }}>
                            Hum sirf package nahi dete, hum aapki yatra
                            ko yaadgaar memories me badalte hain
                        </h1>
                    </div>
                    <button className="group relative mt-16 overflow-hidden rounded-full border border-white/30 px-9 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-900 ease-out hover:-translate-y-1 hover:scale-[1.03]"
                        style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                        <span className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-900 group-hover:opacity-100" style={{ backgroundColor: 'var(--brand-orange)' }} />
                        <span className="absolute left-[-80%] top-0 h-full w-1/2 skew-x-[-25deg] bg-white/25 transition-all duration-900 group-hover:left-[130%]" />
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Journey
                            <span className="transition-transform duration-900 group-hover:translate-x-1">
                                →
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;