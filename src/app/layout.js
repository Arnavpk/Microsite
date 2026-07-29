import './globals.css';

export const metadata = {
  title: "Dave & Buster's Mumbai Party Packages",
  description: "A branded microsite for Dave & Buster's Mumbai party packages with video hero, package selector, enquiry form, and parallax visual effects.",
  openGraph: {
    title: "Dave & Buster's Mumbai Party Packages",
    description: "A branded microsite for Dave & Buster's Mumbai party packages with video hero, package selector, enquiry form, and parallax visual effects.",
    type: 'website',
    url: 'https://daveparty-xbozrtfm.manus.space/',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dave & Buster's Mumbai Party Packages",
    description: "A branded microsite for Dave & Buster's Mumbai party packages with video hero, package selector, enquiry form, and parallax visual effects.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}