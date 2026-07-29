'use client';

export default function HeroVideo() {
    const scrollToPackages = () => {
        document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToEnquiry = () => {
        document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    };

    return (
        <section className="relative h-[100svh] sm:h-[90vh] md:h-[85vh] w-full overflow-hidden flex items-center justify-center">

            {/* ── Video Background ──────────────────────────────────── */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-db-dark/30 via-db-dark/65 to-db-dark z-10" />
                <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
                    <source src="https://daveparty-xbozrtfm.manus.space/manus-storage/compressed_video_02338fcf.mp4" type="video/mp4" />
                </video>
            </div>

            {/* ── Hero Content ──────────────────────────────────────── */}
            <div className="container relative z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 text-center justify-center">

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] sm:leading-none mb-4 sm:mb-6 text-center">
                        LET&apos;S MAKE SOME <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-db-orange via-amber-400 to-db-orange animate-shimmer">
                            MEMORIES
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-2xl font-medium text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto font-body text-center px-2 sm:px-0">
                        Get ready for the ultimate mix of gourmet dining, premium drinks, Nitro bowling lanes, and India&apos;s biggest arcade setup.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
                        <button
                            onClick={scrollToPackages}
                            className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap bg-db-orange hover:bg-db-orange/90 text-white font-display tracking-widest uppercase font-bold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 neon-glow-orange hover:scale-105 active:scale-95"
                        >
                            EXPLORE PACKAGES
                        </button>
                        <button
                            onClick={scrollToEnquiry}
                            className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap border border-white/30 bg-transparent text-white hover:bg-white/10 font-display tracking-widest uppercase font-bold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            BOOK YOUR PARTY
                        </button>
                    </div>

                </div>
            </div>

            {/* ── Scroll Down ───────────────────────────────────────── */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <button
                    onClick={scrollDown}
                    className="flex flex-col items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest text-muted-foreground hover:text-white transition-colors cursor-pointer"
                >
                    SCROLL DOWN
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="h-4 w-4 rotate-90 text-db-orange">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            </div>

        </section>
    );
}