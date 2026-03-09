import type { ReactNode } from 'react';

type RoutePanelProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function RoutePanel({ title, description, children }: RoutePanelProps) {
  return (
    <div className="panel">
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <p className="muted">{description}</p>
      {children}
    </div>
  );
}
