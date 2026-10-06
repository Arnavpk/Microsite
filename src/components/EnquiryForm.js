'use client';
import { useState } from 'react';

function ChevronDown() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground pointer-events-none"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

const INPUT = 'w-full bg-db-dark border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-db-orange transition-colors';
const LABEL = 'text-xs font-bold text-gray-300 uppercase tracking-wider block';
const EMPTY = { name: '', phone: '', email: '', pkg: 'mocktail', guests: 20, date: '', message: '' };

function SuccessScreen({ onReset }) {
    return (
        <section id="enquiry" className="py-12 sm:py-16 relative overflow-hidden bg-db-dark border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-db-orange/5 rounded-full blur-3xl -z-10" />
            <div className="container max-w-4xl px-4 sm:px-6">
                <div className="bg-db-dark-card border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative p-6 sm:p-8 md:p-12 text-center space-y-4 sm:space-y-5">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-db-orange via-db-blue to-db-orange" />
                    <div className="text-5xl sm:text-6xl">🎉</div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white">ENQUIRY SENT!</h2>
                    <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                        Thanks! Our Sales Manager will reach out within 24 hours to help craft your perfect custom package.
                    </p>
                    <button onClick={onReset}
                        className="w-full sm:w-auto mt-2 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-db-orange text-white font-display tracking-widest uppercase font-bold text-sm neon-glow-orange hover:scale-105 active:scale-95 transition-all duration-300">
                        SUBMIT ANOTHER ENQUIRY
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function EnquiryForm() {
    const [form, setForm] = useState(EMPTY);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    function onChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        // TODO: replace with real API call
        // await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(form) });
        await new Promise((r) => setTimeout(r, 900));
        setLoading(false);
        setSubmitted(true);
    }

    if (submitted) return <SuccessScreen onReset={() => { setSubmitted(false); setForm(EMPTY); }} />;

    return (
        <section id="enquiry" className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-70 relative overflow-hidden bg-[#08081a] border-t border-white/5">

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-db-orange/5 rounded-full blur-3xl -z-10" />

            <div className="container max-w-4xl">
                <div className="bg-db-dark-card border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative">

                    <div className="p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8 bg-[#0f0f30]">

                        {/* Header */}
                        <div className="text-center space-y-2">
                            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-db-orange uppercase">
                                GOT A REASON TO CELEBRATE?
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white">LET&apos;S PLAN YOUR PARTY!</h2>
                            <p className="text-muted-foreground text-sm max-w-lg mx-auto px-2 sm:px-0">
                                Tell us what you have in mind, and our dedicated team will connect with you within 24 hours to curate an experience made for your party.

                            </p>
                        </div>

                        <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">

                            {/* Row 1: Name | Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                <div className="space-y-2">
                                    <label className={LABEL}>Full Name *</label>
                                    <input type="text" name="name" value={form.name} onChange={onChange}
                                        required placeholder="e.g. Rahul Sharma" className={INPUT} />
                                </div>
                                <div className="space-y-2">
                                    <label className={LABEL}>Mobile Number *</label>
                                    <input type="tel" name="phone" value={form.phone} onChange={onChange}
                                        required placeholder="e.g. +91 98765 43210" className={INPUT} />
                                </div>
                            </div>

                            {/* Row 2: Email | Package */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                <div className="space-y-2">
                                    <label className={LABEL}>Email Address *</label>
                                    <input type="email" name="email" value={form.email} onChange={onChange}
                                        required placeholder="e.g. rahul@example.com" className={INPUT} />
                                </div>
                                <div className="space-y-2">
                                    <label className={LABEL}>Select Party Package</label>
                                    <div className="relative">
                                        <select name="pkg" value={form.pkg} onChange={onChange}
                                            className={`${INPUT} appearance-none`}>
                                            <option value="mocktail" className="bg-db-dark-card">Mocktail Package</option>
                                            <option value="beer-belly" className="bg-db-dark-card">Beer Belly Package</option>
                                            <option value="prime" className="bg-db-dark-card">Prime Package</option>
                                            <option value="elite" className="bg-db-dark-card">Elite Package</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-4 flex items-center">
                                            <ChevronDown />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Guests | Date */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                <div className="space-y-2">
                                    <label className={LABEL}>Estimated Guests (Min. 20)</label>
                                    <input type="number" name="guests" value={form.guests} onChange={onChange}
                                        min="20" className={INPUT} />
                                </div>
                                <div className="space-y-2">
                                    <label className={LABEL}>Preferred Date</label>
                                    <input type="date" name="date" value={form.date} onChange={onChange}
                                        className={`${INPUT} [color-scheme:dark]`} />
                                </div>
                            </div>

                            {/* Row 4: Textarea */}
                            <div className="space-y-2">
                                <label className={LABEL}>Special Requests / Add-ons</label>
                                <textarea name="message" value={form.message} onChange={onChange} rows={3}
                                    placeholder="Tell us about any game add-ons, dietary preferences, or corporate requirements..."
                                    className={`${INPUT} resize-none`} />
                            </div>

                            {/* Submit */}
                            <button type="submit" disabled={loading}
                                className="inline-flex items-center justify-center gap-2 w-full bg-db-orange hover:bg-db-orange/90 text-white font-display tracking-widest uppercase font-bold text-sm sm:text-base py-4.5 sm:py-6 rounded-xl transition-all duration-300 neon-glow-orange hover:scale-[1.01] active:scale-95 disabled:opacity-70 disabled:pointer-events-none">
                                {loading ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}