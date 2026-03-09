import { DashboardCards } from '@/components/dashboard/cards';

export default function HomePage() {
  return (
    <div className="grid" style={{ gap: 16 }}>
      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Executive Overview</h2>
        <p className="muted">Monitor revenue, demand, and operating posture across your hospitality portfolio.</p>
      </section>
      <DashboardCards />
    </div>
  );
}
