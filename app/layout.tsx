import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'SparklePro Cleaning Services - Professional Cleaning Company',
  description: 'Professional residential and commercial cleaning services. Trusted, reliable, and eco-friendly cleaning solutions for your home and business.',
  keywords: 'cleaning services, professional cleaning, residential cleaning, commercial cleaning, house cleaning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}