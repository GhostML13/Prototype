import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Hospitality Intelligence Cloud', description: 'Premium hospitality intelligence and demand activation platform foundation.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
