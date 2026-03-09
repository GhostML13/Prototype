'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Overview' },
  { href: '/market-intelligence', label: 'Market Intelligence' },
  { href: '/demand-signals', label: 'Demand Signals' },
  { href: '/reports', label: 'Reports' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/settings', label: 'Settings' }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <h2 style={{ marginTop: 0 }}>Hospitality Intelligence Cloud</h2>
      <p className="muted" style={{ marginBottom: 16 }}>
        Premium SaaS Dashboard
      </p>
      <nav>
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className={`nav-link${active ? ' active' : ''}`}>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
