'use client';

function MapPinIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
function PhoneIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
function MailIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}
function ExternalLinkIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M15 3h6v6" /><path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
    );
}
function ArrowUpRightIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
        </svg>
    );
}

const NAV_LINKS = [
    { label: 'About the Brand', id: 'brand-intro' },
    { label: 'Party Packages', id: 'packages' },
    { label: 'Food & Beverage Menu', id: 'full-menu' },
    { label: 'Send Enquiry', id: 'enquiry' },
];

const HEADING = 'font-display font-bold text-white text-sm tracking-wider uppercase border-b border-white/10 pb-1.5';

export default function Footer() {
    function scrollTo(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <footer className="bg-[#08081a] border-t border-white/10 pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-8 md:px-16 lg:px-30 relative">
            <div className="container">

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 mb-8 text-center md:text-left">

                    {/* Logo — 4 cols */}
                    <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start">
                        <img src="https://daveparty-xbozrtfm.manus.space/manus-storage/Logo-2_ce4d3258.png" alt="Dave & Buster's Logo" className="h-14 sm:h-16 w-auto object-contain" />
                    </div>

                    {/* Quick Nav — 3 cols */}
                    <div className="md:col-span-3 space-y-3 flex flex-col items-center md:items-start">
                        <h4 className={`${HEADING} w-full max-w-[220px] md:max-w-none`}>Quick Navigation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {NAV_LINKS.map(({ label, id }) => (
                                <li key={id}>
                                    <button onClick={() => scrollTo(id)} className="hover:text-db-orange transition-colors text-center md:text-left cursor-pointer">
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact — 5 cols */}
                    <div className="md:col-span-5 space-y-3 flex flex-col items-center md:items-start">
                        <h4 className={`${HEADING} w-full max-w-[280px] md:max-w-none`}>Contact &amp; Location Details</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3 text-left">
                                <MapPinIcon className="h-5 w-5 text-db-orange shrink-0 mt-0.5" />
                                <span className="leading-relaxed">Dave &amp; Buster&apos;s, Infiniti Mall, Link Road, Phase D, Oshiwara, Andheri West, Mumbai, Maharashtra 400053</span>
                            </li>
                            <li className="flex items-start gap-3 text-left">
                                <PhoneIcon className="h-5 w-5 text-db-orange shrink-0 mt-0.5" />
                                <div className="space-y-1.5">
                                    <div className="flex flex-wrap items-baseline gap-x-2">
                                        <span className="text-white/80 font-medium">Chirag:</span>
                                        <a href="tel:+919876543210" className="hover:text-db-orange transition-colors">+91 98765 43210</a>
                                    </div>
                                    <div className="flex flex-wrap items-baseline gap-x-2">
                                        <span className="text-white/80 font-medium">Siddharth:</span>
                                        <a href="tel:+919876543211" className="hover:text-db-orange transition-colors">+91 98765 43211</a>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 min-w-0 text-left">
                                <MailIcon className="h-5 w-5 text-db-orange shrink-0" />
                                <a href="mailto:sales.mum@daveandbustersindia.com"
                                    className="hover:text-db-orange transition-colors break-all min-w-0">
                                    sales.mum@daveandbustersindia.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <ExternalLinkIcon className="h-5 w-5 text-db-orange shrink-0" />
                                <a href="https://www.daveandbustersindia.com" target="_blank" rel="noopener noreferrer"
                                    className="hover:text-db-orange transition-colors flex items-center gap-1 break-all">
                                    www.daveandbustersindia.com
                                    <ArrowUpRightIcon className="h-3 w-3 shrink-0" />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground text-center sm:text-left">
                        &copy; 2026 Dave &amp; Buster&apos;s India. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}