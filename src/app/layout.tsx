import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const headingFont = Poppins({ 
  subsets: ['latin'],
  variable: '--font-heading',
});

const bodyFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
});

// Clean SEO metadata - remove any remaining placeholders
const seoTitle = "Nutrigo Natura Agrotech Private Limited - Manufacturer of Indian Spices from Guwahati - Wholesaler | {industry} in {city}".replace(/{[^}]+}/g, '').replace(/s+/g, ' ').trim() || 'Company Website';
const seoDescRaw = "Leading Wholesaler of {industry} products in {city}, {state}. Year Established: {year_established}. GST Verified. Contact us for quality products and competitive pricing.".replace(/{[^}]+}/g, '').replace(/s+/g, ' ').trim();
const seoDescFallback = 'Quality products and services';
const seoDescription = seoDescRaw || seoDescFallback;

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
