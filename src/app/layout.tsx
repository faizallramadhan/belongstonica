import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Happy Birthday Nica Sayang',
  description: 'A Birthday gift for beloved Nica',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const themeColor = '#F8F5F0';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lora.variable} bg-cream text-dark`}>
        {children}
      </body>
    </html>
  );
}
