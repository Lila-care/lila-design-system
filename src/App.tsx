import { Link, Route, Switch, useLocation } from "wouter";
import { REGISTRY, GROUPS } from "./sketch/registry";

function App() {
  const [location] = useLocation();

  return (
    <div className="flex min-h-screen" style={{ background: "#FAF6F0", color: "#3D2B50" }}>
      <aside
        className="flex w-64 shrink-0 flex-col overflow-y-auto px-5 py-8"
        style={{
          background: "linear-gradient(180deg, #FAF6F0, #F3EDF7 60%)",
          borderRight: "1px solid rgba(61,43,80,0.08)",
        }}
      >
        <div className="px-2 pb-7">
          <Link href="/">
            <div
              className="cursor-pointer italic font-bold text-2xl leading-none"
              style={{ fontFamily: "'Playfair Display', serif", color: "#9B72C8" }}
            >
              Lila
            </div>
          </Link>
          <div className="mt-1 text-[13px]" style={{ color: "rgba(61,43,80,0.55)" }}>
            Design System
          </div>
        </div>

        <nav className="flex flex-col gap-6">
          {GROUPS.map((group) => {
            const entries = REGISTRY.filter((e) => e.group === group);
            if (entries.length === 0) return null;
            return (
              <div key={group}>
                <div
                  className="mb-1.5 px-3.5 text-[11px] font-semibold uppercase tracking-wide"
                  style={{ color: "rgba(61,43,80,0.4)" }}
                >
                  {group}
                </div>
                <div className="flex flex-col gap-0.5">
                  {entries.map((entry) => {
                    const isActive = location === entry.path;
                    return (
                      <Link key={entry.path} href={entry.path}>
                        <div
                          className="cursor-pointer rounded-lg px-3.5 py-[7px] text-left text-[13.5px] font-medium transition-colors"
                          style={
                            isActive
                              ? { background: "#9B72C8", color: "#fff" }
                              : { color: "rgba(61,43,80,0.7)" }
                          }
                        >
                          {entry.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="mt-auto pt-5 text-[11px]" style={{ color: "rgba(61,43,80,0.45)" }}>
          Cataloga en vivo el código real de <code>lila-web</code> — sin duplicarlo.
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-10 py-10">
        <Switch>
          {REGISTRY.map((entry) => (
            <Route key={entry.path} path={entry.path} component={entry.Component} />
          ))}
        </Switch>
      </main>
    </div>
  );
}

export default App;
