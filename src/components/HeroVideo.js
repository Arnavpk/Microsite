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
        <section className="relative w-full bg-db-dark">

            {/* ── Video (horizontal 16:9 on mobile, unchanged on desktop) ── */}
            <div className="relative aspect-video sm:aspect-auto sm:h-[90vh] md:h-[85vh] w-full overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-12 sm:h-32 bg-gradient-to-b from-transparent to-db-dark z-10" />
                <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
                    <source src="https://daveandbustersindia.com/asset/IMG_5271.MP4" type="video/mp4" />
                </video>

                {/* ── Scroll Down (hidden on mobile) ───────────────────── */}
                <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <button
                        onClick={scrollDown}
                        className="flex flex-col items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                        SCROLL DOWN
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="h-4 w-4 rotate-90 text-db-orange">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* ── Hero Content (below the video) ────────────────────── */}
            <div className="relative z-20 w-full flex justify-center px-4 sm:px-6 py-14 sm:py-20">
                <div className="w-full max-w-5xl flex flex-col items-center text-center">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] md:whitespace-nowrap mb-4 sm:mb-6">
                        MAKE YOUR CELEBRATIONS{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-db-orange via-amber-400 to-db-orange animate-shimmer">
                            EXTRAORDINARY.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto font-body">
                        From elevated dining and immersive arcade experiences to nitro bowling, every moment is designed for great times and unforgettable memories.
                    </p>

                    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
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

        </section>
    );
}