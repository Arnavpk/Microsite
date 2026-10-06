'use client';
import { useState, useEffect } from 'react';

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

function CloseIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={className}>
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}

const MENU_CARDS = [
    {
        id: 'veg',
        title: 'VEG APPETIZERS',
        count: '22+ Options',
        hoverBorder: 'hover:border-db-orange/30',
        ringColor: 'focus-visible:ring-db-orange',
        items: ['Hummus & Pita Duo', 'Veggie Crunch Rolls', 'Spiced Paneer Wraps', 'Chilli Cheese Melts', 'Cheesy Mac Bites'],
        allItems: [
            'Hummus & Pita Duo', 'Veggie Crunch Rolls', 'Spiced Paneer Wraps', 'Chilli Cheese Melts', 'Cheesy Mac Bites',
            'Crispy Corn & Peppers', 'Paneer Tikka Skewers', 'Loaded Nachos (Veg)', 'Veg Spring Rolls', 'Stuffed Mushroom Caps',
            'Mini Veg Sliders', 'Cheese Jalapeno Poppers', 'Veg Manchurian Bites', 'Crispy Fried Okra', 'Paneer 65',
            'Onion Rings', 'Peri Peri Fries', 'Veg Seekh Kebab', 'Herb & Cheese Bruschetta', 'Crispy Potato Wedges',
            'Veg Momos', 'Corn Cheese Balls',
        ],
    },
    {
        id: 'non-veg',
        title: 'NON-VEG APPETIZERS',
        count: '20+ Options',
        hoverBorder: 'hover:border-db-blue/40',
        ringColor: 'focus-visible:ring-db-blue',
        items: ['Chicken Masala Wraps', 'Spicy Chicken Cheese Toast', 'Prawns Koliwada', 'Tex-Mex Chicken Sticks', 'Crunchy Chicken Bites'],
        allItems: [
            'Chicken Masala Wraps', 'Spicy Chicken Cheese Toast', 'Prawns Koliwada', 'Tex-Mex Chicken Sticks', 'Crunchy Chicken Bites',
            'Chicken Tikka Skewers', 'Fish Fingers', 'Chilli Chicken', 'Chicken 65', 'Loaded Nachos (Chicken)',
            'Mini Chicken Sliders', 'BBQ Chicken Wings', 'Prawn Tempura', 'Chicken Seekh Kebab', 'Fish Amritsari',
            'Chicken Momos', 'Peri Peri Chicken Bites', 'Butter Garlic Prawns', 'Chicken Manchurian', 'Crispy Chicken Popcorn',
        ],
    },
];

function Dot() {
    return <span className="h-1.5 w-1.5 rounded-full bg-db-orange shrink-0" />;
}

function MenuModal({ card, onClose }) {
    useEffect(() => {
        if (!card) return; // only lock when actually open
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKey);
        };
    }, [card, onClose]);

    if (!card) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            role="dialog"
            aria-modal="true"
            aria-label={card.title}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal panel */}
            <div className="relative z-10 w-full sm:max-w-lg max-h-[85vh] sm:max-h-[80vh] bg-db-dark-card border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">

                {/* Header */}
                <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 border-b border-white/10 shrink-0">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wider flex items-center gap-2">
                        <UtensilsIcon className="h-5 w-5 text-db-orange shrink-0" />
                        {card.title}
                    </h3>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="shrink-0 p-1.5 rounded-full text-muted-foreground hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    >
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                {/* Scrollable item list */}
                <div className="overflow-y-auto px-5 sm:px-6 py-4 sm:py-5">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-gray-300">
                        {card.allItems.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                                <Dot />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function FeastSelection() {
    const [activeCard, setActiveCard] = useState(null);

    const scrollToEnquiry = () => {
        document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="full-menu" className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-30 relative bg-[#08081a] border-t border-white/5">
            <div className="container">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">CURATE YOUR FEAST</h2>
                    <p className="text-muted-foreground text-sm sm:text-base px-2 sm:px-0">
                        From crowd-favourite bites to indulgent mains and desserts, customize the menu to create a spread made for your occasion.
                    </p>
                </div>

                {/* Menu Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-10">
                    {MENU_CARDS.map((card) => (
                        <button
                            key={card.id}
                            onClick={() => setActiveCard(card)}
                            className={`text-left flex flex-col gap-6 rounded-xl border py-5 sm:py-6 shadow-sm bg-db-dark-card border-white/10 ${card.hoverBorder} hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 ${card.ringColor} focus-visible:ring-offset-2 focus-visible:ring-offset-db-dark`}
                        >
                            <div className="p-5 sm:p-6 space-y-4">

                                {/* Card header */}
                                <div className="flex justify-between items-center border-b border-white/10 pb-3 gap-2">
                                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wider flex items-center gap-2">
                                        <UtensilsIcon className="h-5 w-5 text-db-orange shrink-0" />
                                        {card.title}
                                    </h3>
                                    <span className="text-xs text-db-orange font-semibold whitespace-nowrap">{card.count}</span>
                                </div>

                                {/* Item list */}
                                <ul className="space-y-2 text-sm text-gray-300">
                                    {card.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <Dot />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                    <li className="text-xs text-db-orange font-semibold italic pl-3.5 underline underline-offset-2">
                                        + many more choices — tap to view all
                                    </li>
                                </ul>

                            </div>
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="https://daveandbustersindia.com/asset/Mumbai%20Menu%20ONLINE%20(1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap bg-[#17179a] border border-white/10 text-white font-display tracking-widest uppercase font-bold text-sm px-6 sm:px-8 py-4 sm:py-5 rounded-full hover:scale-105 active:scale-95 transition-all"
                    >
                        VIEW FULL MENU SPREAD
                    </a>
                </div>

            </div>

            {/* Modal */}
            <MenuModal card={activeCard} onClose={() => setActiveCard(null)} />
        </section>
    );
}