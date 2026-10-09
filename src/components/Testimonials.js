'use client';
import { useState, useEffect } from 'react';

function QuoteIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="currentColor" className={className}>
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
    );
}

function StarIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="currentColor" className={className}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

const TESTIMONIALS = [
    {
        id: 't1',
        name: 'Ananya Kapoor',
        date: 'June 2026',
        occasion: 'Birthday Celebration',
        quote: "Booked the Prime Package for my daughter's birthday and the entire team went above and beyond. The food spread was incredible and the arcade credits kept the kids entertained for hours.",
        rating: 5,
        photo: 'https://daveandbustersindia.com/asset/1784025043407.jpg',
        logo: '/images/testimonials/t1-logo.png',
    },
    {
        id: 't2',
        name: 'Rohan Mehta',
        date: 'May 2026',
        occasion: 'Corporate Offsite',
        quote: 'We hosted our team offsite here and it was a huge hit. The bowling lanes and the private event space made coordinating 40+ people surprisingly smooth.',
        rating: 5,
        photo: 'https://daveandbustersindia.com/asset/FCM%20Travel.jpg',
        logo: '/images/testimonials/t1-logo.png',
    },
    {
        id: 't3',
        name: 'Priya & Karan Shah',
        date: 'April 2026',
        occasion: 'Anniversary Dinner',
        quote: "Came in for our anniversary and stayed way longer than planned. Great drinks, great music, and the staff made sure our table never felt neglected even on a packed Saturday night.",
        rating: 5,
        photo: 'https://daveandbustersindia.com/asset/WhatsApp%20Image%202026-09-04%20at%2012.19.32%20PM.jpeg',
        logo: '/images/testimonials/t1-logo.png',
    },
    {
        id: 't4',
        name: 'Vikram Nair',
        date: 'March 2026',
        occasion: "Kid's Birthday Party",
        quote: 'Second time booking the Mocktail Package for my son and once again everything was seamless — from setup to the food service timing. Highly recommend for family events.',
        rating: 4,
        photo: 'https://daveandbustersindia.com/asset/WhatsApp%20Image%202026-09-04%20at%2012.19.32%20PM.jpeg',
        logo: '/images/testimonials/t1-logo.png',
    },
];

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                    key={i}
                    className={`h-3.5 w-3.5 ${i < rating ? 'text-db-orange' : 'text-white/15'}`}
                />
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [featuredIdx, setFeaturedIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setFeaturedIdx((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const featured = TESTIMONIALS[featuredIdx];

    return (
        <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-30 relative overflow-hidden bg-[#08081a] border-t border-white/5">

            {/* Ambient glow — matches other sections */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-db-orange/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-db-blue/10 rounded-full blur-3xl -z-10" />

            <div className="container">

                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">PARTIES WE LOVED HOSTING</h2>
                    <p className="text-muted-foreground text-sm sm:text-base px-2 sm:px-0">
                        Great teams, big moments, and plenty of stories worth remembering. They brought the crew, we brought the fun.

                    </p>
                </div>

                {/* Featured rotating quote */}
                {/* <div className="max-w-3xl mx-auto mb-10 sm:mb-12">
                    <div className="relative rounded-2xl sm:rounded-3xl border border-db-orange/20 bg-db-dark-card p-6 sm:p-10 text-center shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-db-orange via-db-blue to-db-orange" />
                        <QuoteIcon className="h-8 w-8 sm:h-10 sm:w-10 text-db-orange/30 mx-auto mb-4" />

                        <p className="text-base sm:text-xl md:text-2xl font-medium text-gray-200 leading-relaxed mb-6 font-body">
                            "{featured.quote}"
                        </p>

                        <div className="flex flex-col items-center gap-2">
                            <StarRating rating={featured.rating} />
                            <p className="font-display font-bold text-white tracking-wider uppercase text-sm sm:text-base">
                                {featured.name}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                {featured.occasion} &middot; {featured.date}
                            </p>
                        </div> */}

                {/* Dot indicators */}
                {/* <div className="flex justify-center gap-2 mt-6">
                            {TESTIMONIALS.map((t, i) => (
                                <button
                                    key={t.id}
                                    onClick={() => setFeaturedIdx(i)}
                                    aria-label={`Show testimonial from ${t.name}`}
                                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === featuredIdx ? 'w-6 bg-db-orange' : 'w-1.5 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div> */}



                {/* Grid of all testimonials */}
                {/* Infinite carousel of testimonials */}
                {/* Infinite carousel */}
                <div className="relative overflow-hidden group -mx-4 sm:mx-0 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                    <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                        {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                            <div
                                key={`${t.id}-${i}`}
                                aria-hidden={i >= TESTIMONIALS.length}
                                className="shrink-0 w-[260px] sm:w-[300px] mr-4 sm:mr-5 h-[340px] flex flex-col rounded-xl border border-white/10 bg-db-dark-card overflow-hidden hover:border-db-orange/30 transition-colors duration-300"
                            >
                                {/* Team photo + overlapping logo badge */}
                                <div className="relative h-[72%] shrink-0">
                                    <div className="absolute inset-0 overflow-hidden">
                                        {t.photo ? (
                                            <img src={t.photo} alt={`${t.occasion} team`} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-db-orange/20 to-db-blue/20" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-db-dark-card/60 to-transparent" />
                                    </div>

                                    {/* Logo badge overlapping bottom edge */}
                                    <div className="absolute -bottom-6 left-5 z-10 h-12 w-12 rounded-xl bg-white border border-white/20 shadow-lg flex items-center justify-center overflow-hidden">
                                        {t.logo ? (
                                            <img src={t.logo} alt={`${t.occasion} logo`} className="h-full w-full object-contain p-1.5" />
                                        ) : (
                                            <span className="text-db-dark font-black text-lg">{t.occasion.charAt(0)}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Occasion only */}
                                <div className="flex items-center flex-1 min-h-0 px-5 pt-6">
                                    <p className="font-display font-bold text-white text-sm sm:text-base tracking-wide uppercase">
                                        {t.occasion}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}