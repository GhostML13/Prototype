'use client';

import { usePathname } from 'next/navigation';

function formatTitle(pathname: string) {
  if (pathname === '/') return 'Overview';
  return pathname
    .slice(1)
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function Header() {
  const pathname = usePathname();
  const title = formatTitle(pathname);

  return (
    <header className="panel" style={{ marginBottom: 16 }}>
      <h1 className="page-title">{title}</h1>
      <p className="muted">Enterprise-grade intelligence for hospitality operators.</p>
    </header>
  );
}
