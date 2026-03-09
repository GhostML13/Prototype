import { DashboardCards } from '@/components/dashboard/cards';
import { RoutePanel } from '@/components/dashboard/route-panel';

export default function HomePage() {
  return (
    <div className="grid" style={{ gap: 16 }}>
      <RoutePanel
        title="Executive Overview"
        description="Monitor revenue, demand, and operating posture across your hospitality portfolio."
      />
      <DashboardCards />
    </div>
  );
}
