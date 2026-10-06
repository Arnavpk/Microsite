'use client';

export default function Navbar() {
    const handleEnquiryClick = () => {
        const el = document.getElementById('enquiry');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-db-dark/85 backdrop-blur-md">
            <div className="container flex h-20 md:h-24 items-center justify-between py-3 md:py-4 px-4 md:px-6 lg:pl-[100px]">

                {/* ── Left: Logo + Venue Info ─────────────────────────── */}
                <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                    <img
                        src="https://daveparty-xbozrtfm.manus.space/manus-storage/Logo-2_ce4d3258.png"
                        alt="Dave & Buster's Logo"
                        className="h-10 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform duration-200 shrink-0"
                    />
                    <div className="border-l border-white/20 pl-2 sm:pl-4 min-w-0 max-w-[170px] sm:max-w-xs md:max-w-md lg:max-w-lg">
                        <span className="font-display text-[11px] sm:text-sm md:text-base font-black tracking-wider text-db-orange block truncate">
                            DAVE &amp; BUSTER&apos;S MUMBAI
                        </span>
                        <span className="block text-[9px] sm:text-[10px] md:text-xs text-muted-foreground leading-tight mt-0.5 sm:truncate">
                            4th Floor, Infiniti Mall, Andheri West.
                        </span>
                    </div>
                </div>

                {/* ── Right: CTA Button ───────────────────────────────── */}
                <div className="flex items-center gap-3 shrink-0">
                    <button
                        onClick={handleEnquiryClick}
                        className="inline-flex items-center justify-center whitespace-nowrap bg-db-orange hover:bg-db-orange/90 text-white font-display tracking-wider uppercase font-semibold text-[11px] sm:text-xs md:text-sm px-3.5 sm:px-5 py-2.5 sm:py-4 rounded-full transition-all duration-300 neon-glow-orange hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        SEND ENQUIRY
                    </button>
                </div>

            </div>
        </header>
    );
}