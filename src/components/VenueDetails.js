'use client';

const IMAGES = [
    {
        src: 'https://daveparty-xbozrtfm.manus.space/manus-storage/WhatsAppImage2026-05-31at14.13.16_41c2ab3e.jpeg',
        alt: "Dave & Buster's Nitro Bowling",
        colSpan: 'col-span-8',
        height: 'h-40 sm:h-52 md:h-64',
        hoverBorder: 'hover:border-db-orange/40',
    },
    {
        src: 'https://daveparty-xbozrtfm.manus.space/manus-storage/WhatsAppImage2026-05-31at14.13.16(1)_6978b299.jpeg',
        alt: "Dave & Buster's Dining",
        colSpan: 'col-span-4',
        height: 'h-40 sm:h-52 md:h-64',
        hoverBorder: 'hover:border-db-blue/40',
    },
    {
        src: 'https://daveparty-xbozrtfm.manus.space/manus-storage/WhatsAppImage2026-05-31at14.13.17(1)_c955437c.jpeg',
        alt: "Dave & Buster's Sports Lounge",
        colSpan: 'col-span-4',
        height: 'h-32 sm:h-40 md:h-48',
        hoverBorder: 'hover:border-db-blue/40',
    },
    {
        src: 'https://daveparty-xbozrtfm.manus.space/manus-storage/arcade_gallery_d2a66be8.jpeg',
        alt: "Dave & Buster's Premium Arcade Setup",
        colSpan: 'col-span-8',
        height: 'h-32 sm:h-40 md:h-48',
        hoverBorder: 'hover:border-db-orange/40',
    },
];

export default function VenueDetails() {
    return (
        <section id="brand-intro" className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-30 relative overflow-hidden bg-[#08081a] items-center justify-center">

            {/* Decorative ambient blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-db-blue/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-db-orange/5 rounded-full blur-3xl -z-10" />

            <div className="container">

                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white text-center">
                        EAT, DRINK, PLAY, WATCH
                    </h2>
                </div>

                {/* Main grid: images left | text right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

                    {/* Photo mosaic — 6 of 12 cols on lg */}
                    <div className="lg:col-span-6 grid grid-cols-12 gap-3 sm:gap-4">
                        {IMAGES.map((img) => (
                            <div
                                key={img.alt}
                                className={`${img.colSpan} overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 ${img.hoverBorder} transition-colors`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={`w-full ${img.height} object-cover hover:scale-105 transition-transform duration-500`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Brand copy — 6 of 12 cols on lg */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
                        <p className="text-base sm:text-lg md:text-[21px] font-semibold text-db-orange tracking-wider uppercase font-display">
                            EAT, DRINK, PLAY, WATCH — ALL UNDER ONE NEON ROOF
                        </p>
                        <div className="text-muted-foreground space-y-4 font-body text-sm sm:text-base leading-relaxed">
                            <p>
                                Dave & Buster's brings America's iconic entertainment experience to Mumbai. Located at Infiniti Mall, Andheri West, it's your all-in-one destination for arcade games, VR, bowling, sports screenings, great food, and signature drinks.
                            </p>
                            <p>
                                From birthday parties and corporate events to family outings and celebrations, our customizable packages make every occasion unforgettable.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}