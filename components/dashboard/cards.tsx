import { kpis, reports, signals } from '@/lib/data';

export function DashboardCards() {
  return (
    <div className="grid" style={{ gap: 16 }}>
      <div className="grid kpis">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="panel">
            <p className="muted">{kpi.label}</p>
            <h3 style={{ marginBottom: 0 }}>{kpi.value}</h3>
          </article>
        ))}
      </div>

      <div className="grid two">
        <section className="panel">
          <h3 style={{ marginTop: 0 }}>Demand Signals</h3>
          <ul>
            {signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h3 style={{ marginTop: 0 }}>Latest Reports</h3>
          <ul>
            {reports.map((report) => (
              <li key={report}>{report}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
