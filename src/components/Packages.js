'use client';
import { useState } from 'react';

/* ── Icons ─────────────────────────────────────────────────── */
function CheckIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={className ?? 'h-4 w-4 text-db-orange shrink-0 mt-0.5'}>
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}
function UtensilsIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={className}>
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
    );
}
function PlusIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={className}>
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

/* ── Package data — add/update prices here ──────────────────── */
const PACKAGES = [
    {
        id: 'mocktail',
        name: 'Mocktail Package',
        badge: 'A Fresh Take on Fun',
        price: '₹1,499',
        priceNote: 'per person + taxes',
        image: 'https://daveparty-xbozrtfm.manus.space/manus-storage/Non-Alcoholic_8705d423.jpg',
        core: {
            description: 'Features a full spread of delicious food and refreshing mocktails, perfect for non-alcoholic gatherings.',
            drinksHeading: '2 Mocktails of choice from the selection below:',
            drinksOptions: [
                'Orange Sunrise (orange, lemon, mint & soda)',
                'Very Berry (blackberry, lemon & soda)',
                'Peach Delight (peach, lemon & tea)',
                'Pineapple Twist (pineapple, passion fruit & lemon)',
                'Virgin Mojito (mint, lemon & soda)',
                'Kiwi Surprise (kiwi, lemon & soda)',
                'Virgin Sunrise (orange, lemon & cranberry)',
                'Virgin Pina Colada (pineapple, coconut, milk & cream)',
                'Fruit Delight (mix of fruit)',
                'Virgin Bloody Mary (tomato, spices, lemon & salt)',
            ],
            foodItems: ['Salad Bar (2 Veg + 1 Non-Veg)', '2 Veg Starters', '2 Non-Veg Starters', '2 Veg Main Course', '2 Non-Veg Main Course', '3 Staples', '3 Desserts'],
        },
        addons: {
            description: 'Elevate your mocktail party with these optional add-ons.',
            items: ['Customised Birthday Cake', 'Professional Photography (1 hour)', 'DJ / Live Music Setup', 'Customised Decorations', 'Extended Arcade Credits', 'Nitro Bowling Lane (per hour)'],
        },
        terms: [
            'Package valid for a minimum of 20 guests.',
            'Advance booking of at least 7 days is required.',
            'Full payment must be made 48 hours before the event.',
            'Cancellation within 48 hours — 50% of booking amount is forfeited.',
            "Dave & Buster's reserves the right to substitute menu items based on availability.",
            'Outside food and beverages are not permitted.',
            'The venue reserves the right to refuse entry to visibly intoxicated guests.',
        ],
    },
    {
        id: 'beer-belly',
        name: 'Beer Belly Package',
        badge: 'Brews & Good Times',
        price: '₹1,999',
        priceNote: 'per person + taxes',
        image: 'https://daveparty-xbozrtfm.manus.space/manus-storage/Beer_39c781df.jpg',
        core: {
            description: 'The perfect package for beer lovers — premium beer selection paired with a hearty food spread.',
            drinksHeading: 'Unlimited Beer (2 hours) from the following:',
            drinksOptions: ['Kingfisher Premium (330 ml)', 'Kingfisher Ultra (330 ml)', 'Budweiser (330 ml)', 'Corona Extra (330 ml)', 'Heineken (330 ml)'],
            foodItems: ['Salad Bar (2 Veg + 1 Non-Veg)', '2 Veg Starters', '2 Non-Veg Starters', '2 Veg Main Course', '2 Non-Veg Main Course', '3 Staples', '3 Desserts'],
        },
        addons: {
            description: 'Enhance your bash with optional add-ons.',
            items: ['Premium Spirits Add-on (Vodka, Whisky, Rum)', 'Customised Birthday Cake', 'Professional Photography (1 hour)', 'DJ / Live Music Setup', 'Extended Arcade Credits', 'Nitro Bowling Lane (per hour)'],
        },
        terms: ['Package valid for a minimum of 20 guests.', 'Advance booking of at least 7 days is required.', 'Full payment must be made 48 hours before the event.', 'Alcohol service is subject to applicable government regulations.', 'Cancellation within 48 hours — 50% of booking amount is forfeited.', 'Outside food and beverages are not permitted.', 'The venue reserves the right to refuse service to visibly intoxicated guests.'],
    },
    {
        id: 'prime',
        name: 'Prime Package',
        badge: 'Premium All-Day Experience',
        price: '₹2,799',
        priceNote: 'per person + taxes',
        image: 'https://daveparty-xbozrtfm.manus.space/manus-storage/Beer_39c781df.jpg',
        core: {
            description: 'Elevate your celebration with premium spirits, an extended food spread, and arcade credits included.',
            drinksHeading: 'Unlimited drinks (3 hours) including:',
            drinksOptions: ['All beers (as per Beer Belly selection)', 'Selected house spirits — Vodka, Rum, Gin, Whisky', 'Assorted soft drinks & juices', '2 Mocktails of choice per person'],
            foodItems: ['Salad Bar (3 Veg + 2 Non-Veg)', '3 Veg Starters', '3 Non-Veg Starters', '3 Veg Main Course', '3 Non-Veg Main Course', '3 Staples', '4 Desserts', 'D&B Signature Dish'],
        },
        addons: {
            description: 'Further customise your Prime experience.',
            items: ['Customised Birthday Cake', 'Professional Photography (2 hours)', 'DJ / Live Music Setup', 'Customised Decorations Package', 'Extended Arcade Credits', 'Nitro Bowling (2 lanes, 1 hour)'],
        },
        terms: ['Package valid for a minimum of 30 guests.', 'Advance booking of at least 10 days is required.', 'Full payment must be made 48 hours before the event.', 'Alcohol service is subject to applicable government regulations.', 'Cancellation within 72 hours — 50% of booking amount is forfeited.', 'Outside food and beverages are not permitted.', 'Additional arcade credits can be purchased at reception.'],
    },
    {
        id: 'elite',
        name: 'Elite Package',
        badge: 'The Ultimate D&B Experience',
        price: '₹3,999',
        priceNote: 'per person + taxes',
        image: 'https://daveparty-xbozrtfm.manus.space/manus-storage/Beer_39c781df.jpg',
        core: {
            description: "The pinnacle of Dave & Buster's entertainment — full bar access, premium food, dedicated host, and exclusive perks.",
            drinksHeading: 'Unlimited premium drinks (4 hours):',
            drinksOptions: ['Full bar access — all beers, wines & spirits', 'Premium imported spirits', 'Signature D&B cocktails & mocktails', 'Soft drinks, juices & energy drinks', 'Welcome drinks on arrival for all guests'],
            foodItems: ['Full Salad Bar spread', '4 Veg Starters', '4 Non-Veg Starters', '4 Veg Main Course', '4 Non-Veg Main Course', '4 Staples', '5 Desserts', '2 D&B Signature Dishes', 'Midnight Snack Station'],
        },
        addons: {
            description: 'Elite includes most perks — add these for the ultimate experience.',
            items: ['Custom Themed Decoration Package', 'Professional Videography (full event)', 'Live Band Performance', 'VR Gaming Area Exclusive Access', 'Nitro Bowling (all lanes, 2 hours)', 'Dedicated Cocktail Mixologist'],
        },
        terms: ['Package valid for a minimum of 50 guests.', 'Advance booking of at least 14 days is required.', 'Full payment must be made 7 days before the event.', 'Alcohol service is subject to applicable government regulations.', 'Cancellation within 7 days — 75% of booking amount is forfeited.', 'A dedicated event host is assigned for the full duration.', 'Outside food and beverages are strictly not permitted.', 'Exclusive venue access can be arranged on request — enquire separately.'],
    },
];

const TABS = [
    { id: 'core', label: 'Core Offerings', shortLabel: 'Core', Icon: UtensilsIcon },
    { id: 'addons', label: 'Add-ons', shortLabel: 'Add-ons', Icon: PlusIcon },
    { id: 'terms', label: 'Terms & Conditions', shortLabel: 'Terms', Icon: CheckIcon },
];

/* ── Main ───────────────────────────────────────────────────── */
export default function Packages() {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [activeTab, setActiveTab] = useState('core');
    const pkg = PACKAGES[selectedIdx];

    function handlePackageSelect(i) { setSelectedIdx(i); setActiveTab('core'); }
    function scrollToEnquiry() { document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' }); }

    return (
        <section id="packages" className="py-12 sm:py-16 relative bg-[#08081a] border-t border-white/5">
            <div className="container mx-auto">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">CHOOSE YOUR VIBE</h2>
                    <p className="text-muted-foreground text-sm sm:text-base px-2 sm:px-0">
                        Explore our signature party packages designed to cater to any scale, crowd, or budget. Select a package to view its offerings, add-ons, and terms.
                    </p>
                </div>

                {/* ── Package selector buttons ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-4xl mx-auto mb-8 sm:mb-10">
                    {PACKAGES.map((p, i) => {
                        const active = selectedIdx === i;
                        return (
                            <button
                                key={p.id}
                                onClick={() => handlePackageSelect(i)}
                                className={[
                                    'relative flex flex-col items-center justify-center gap-1',
                                    'p-3 sm:p-4 rounded-xl border font-display tracking-wider uppercase font-bold',
                                    'transition-all duration-300 text-center leading-tight',
                                    active
                                        ? 'bg-db-orange border-db-orange text-white neon-glow-orange scale-105 z-10'
                                        : 'bg-db-dark-card border-white/10 text-muted-foreground hover:border-white/30 hover:text-white',
                                ].join(' ')}
                            >
                                {/* Package name */}
                                <span className="text-xs sm:text-sm md:text-base">{p.name}</span>

                                {/* ── Price tag ── */}
                                <span className={[
                                    'text-[11px] sm:text-xs font-bold font-body normal-case tracking-normal',
                                    active ? 'text-white/90' : 'text-db-orange',
                                ].join(' ')}>
                                    {p.price}
                                    <span className={[
                                        'ml-1 text-[10px] font-normal',
                                        active ? 'text-white/60' : 'text-muted-foreground',
                                    ].join(' ')}>
                                        /person
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* ── Package detail card ── */}
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col gap-6 rounded-xl border py-6 bg-db-dark-card border-white/10 overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12">

                            {/* Image panel */}
                            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[280px] sm:min-h-[350px] overflow-hidden">
                                <img src={pkg.image} alt={pkg.name} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-db-dark via-db-dark/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-db-dark-card/90" />

                                {/* Overlay: badge + name + price */}
                                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 z-10 space-y-1.5">
                                    <span className="inline-block bg-db-orange text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider">
                                        {pkg.badge}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                                        {pkg.name}
                                    </h3>

                                    {/* ── Price display in card ── */}
                                    <div className="flex items-baseline gap-2 pt-1">
                                        <span className="text-db-orange text-2xl sm:text-3xl font-black font-body leading-none">
                                            {pkg.price}
                                        </span>
                                        <span className="text-white/60 text-xs leading-none">{pkg.priceNote}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content panel */}
                            <div className="lg:col-span-7 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                                <div className="space-y-5 sm:space-y-6">

                                    {/* Sub-tabs */}
                                    <div className="flex border-b border-white/10 pb-px overflow-x-auto no-scrollbar">
                                        {TABS.map(({ id, label, shortLabel, Icon }) => (
                                            <button
                                                key={id}
                                                onClick={() => setActiveTab(id)}
                                                className={[
                                                    'flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2.5 sm:py-3',
                                                    'font-display tracking-wider text-[11px] sm:text-xs md:text-sm uppercase font-bold',
                                                    'border-b-2 transition-all duration-200 -mb-px whitespace-nowrap shrink-0',
                                                    activeTab === id
                                                        ? 'border-db-orange text-db-orange font-semibold'
                                                        : 'border-transparent text-muted-foreground hover:text-white',
                                                ].join(' ')}
                                            >
                                                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                <span className="sm:hidden">{shortLabel}</span>
                                                <span className="hidden sm:inline">{label}</span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Tab content */}
                                    <div className="min-h-[220px] py-2">
                                        {activeTab === 'core' && <CoreOfferingsTab pkg={pkg} />}
                                        {activeTab === 'addons' && <AddonsTab pkg={pkg} />}
                                        {activeTab === 'terms' && <TermsTab pkg={pkg} />}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 mt-4">
                                    {/* Price reminder */}
                                    <div className="hidden sm:flex items-baseline gap-1.5">
                                        <span className="text-db-orange text-lg font-black font-body">{pkg.price}</span>
                                        <span className="text-muted-foreground text-xs">{pkg.priceNote}</span>
                                    </div>
                                    <button
                                        onClick={scrollToEnquiry}
                                        className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap bg-db-orange hover:bg-db-orange/90 text-white font-display tracking-widest uppercase font-bold text-xs px-6 py-3.5 sm:py-4 rounded-full neon-glow-orange hover:scale-105 active:scale-95 transition-all duration-300"
                                    >
                                        ENQUIRE FOR THIS PACKAGE
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

/* ── Tab sub-components ─────────────────────────────────────── */
function CoreOfferingsTab({ pkg }) {
    return (
        <div className="space-y-4">
            <p className="text-muted-foreground text-sm italic">{pkg.core.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <h4 className="text-sm font-bold text-db-orange tracking-wider uppercase border-l-2 border-db-orange pl-2">Food Spread</h4>
                    <ul className="space-y-1.5 text-sm text-gray-300">
                        {pkg.core.foodItems.map((item) => (
                            <li key={item} className="flex items-start gap-2 leading-relaxed"><CheckIcon /><span>{item}</span></li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-bold text-db-orange tracking-wider uppercase border-l-2 border-db-orange pl-2">Drinks</h4>
                    <ul className="space-y-1.5 text-sm text-gray-300">
                        <li className="flex items-start gap-2 leading-relaxed"><CheckIcon /><span>{pkg.core.drinksHeading}</span></li>
                        {pkg.core.drinksOptions.map((opt) => (
                            <li key={opt} className="flex items-start gap-2 leading-relaxed"><span className="pl-3 text-gray-400">• {opt}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function AddonsTab({ pkg }) {
    return (
        <div className="space-y-4">
            <p className="text-muted-foreground text-sm italic">{pkg.addons.description}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {pkg.addons.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-relaxed text-sm text-gray-300"><CheckIcon /><span>{item}</span></li>
                ))}
            </ul>
        </div>
    );
}

function TermsTab({ pkg }) {
    return (
        <div className="space-y-3">
            <ul className="space-y-2">
                {pkg.terms.map((term, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                        <span className="text-db-orange font-bold shrink-0 mt-0.5">{i + 1}.</span>
                        <span>{term}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}