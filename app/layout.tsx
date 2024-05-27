import './globals.css';
import { ReactNode } from 'react';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Providers } from './components/providers';

export const metadata = {
  title: '형주의 블로그',
  description: 'Generated by Next.js'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main className={'flex justify-center mx-auto max-w-[680px]'}>
            <div className={'px-6 py-8'}>
            {children}
            </div>
          </main>
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
