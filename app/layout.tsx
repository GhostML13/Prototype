import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';

export const metadata: Metadata = {
  title: 'Hospitality Intelligence Cloud',
  description: 'Premium hospitality intelligence and demand activation dashboard.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Sidebar />
          <main className="main-content">
            <Header />
            <section>{children}</section>
          </main>
        </div>
      </body>
    </html>
  );
}
