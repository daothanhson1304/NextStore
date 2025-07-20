import { Baloo_2 } from 'next/font/google';

import '@workspace/ui/globals.css';
import { Providers } from '@/components/providers';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import Breadcrumb from '@/components/shared/breadcrumb';

const fontSans = Baloo_2({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Baloo_2({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-mono tracking-tight antialiased `}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
