import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../components/Toast";
import SEO from "../components/SEO";

// Passcode component for simple auth
function PasscodeAuth({ onAuthenticated }) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple secret key validation
    if (passcode === "ITQHUB_ADMIN_2026") {
      localStorage.setItem("itq_admin_auth", "true");
      onAuthenticated();
    } else {
      setError("Invalid passcode. Access denied.");
      setPasscode("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex min-h-screen items-center justify-center bg-zinc-950 px-6"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/[0.08] bg-zinc-900/50 p-8 shadow-elevated backdrop-blur-xl">
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
        </div>
        <h1 className="mb-2 text-center font-heading text-2xl font-bold text-white">
          Admin Control Center
        </h1>
        <p className="mb-8 text-center text-[13px] text-text-secondary">
          Enter your secure passcode to access the portal.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                setError("");
              }}
              placeholder="Enter Passcode"
              className="w-full rounded-lg border border-white/[0.1] bg-black px-4 py-3 text-[14px] text-white outline-none transition-colors focus:border-blue-500/50"
              autoFocus
            />
          </div>
          {error && <p className="text-[12px] text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-white px-4 py-3 text-[14px] font-semibold text-black transition-transform active:scale-[0.98]"
          >
            Authenticate
          </button>
        </form>
      </div>
    </motion.div>
  );
}

// Main Dashboard Component
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("leads");
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const addToast = useToast();

  useEffect(() => {
    // Check if previously authenticated
    const authStatus = localStorage.getItem("itq_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      if (!res.ok) throw new Error("Failed to fetch leads");
      const data = await res.json();
      setLeads(data);
    } catch (error) {
      addToast({ message: "Error fetching leads", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    // Optimistic update
    const prevLeads = [...leads];
    setLeads(leads.map((l) => (l._id === id ? { ...l, status: newStatus } : l)));

    try {
      const res = await fetch(`/api/leads/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");
      addToast({ message: "Lead status updated successfully", type: "success" });
    } catch (error) {
      // Revert on failure
      setLeads(prevLeads);
      addToast({ message: "Failed to update status", type: "error" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("itq_admin_auth");
    setIsAuthenticated(false);
  };

  // Stats calculation
  const stats = useMemo(() => {
    const total = leads.length;
    
    // Find most popular course
    const courseCounts = leads.reduce((acc, lead) => {
      acc[lead.course] = (acc[lead.course] || 0) + 1;
      return acc;
    }, {});
    const mostPopular = Object.entries(courseCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";
    
    // Conversion rate
    const converted = leads.filter(l => l.status === "converted").length;
    const rate = total > 0 ? ((converted / total) * 100).toFixed(1) : 0;

    return { total, mostPopular, conversionRate: `${rate}%` };
  }, [leads]);

  if (!isAuthenticated) {
    return (
      <>
        <SEO title="Admin Login | ITQHUB" />
        <PasscodeAuth onAuthenticated={() => setIsAuthenticated(true)} />
      </>
    );
  }

  return (
    <>
      <SEO title="Admin Portal | ITQHUB" />
      <div className="flex min-h-screen bg-zinc-950">
        
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/[0.05] bg-black/50 p-6">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-bold tracking-tighter">
              ITQ
            </div>
            <span className="font-heading font-semibold tracking-tight text-white">
              Admin Portal
            </span>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-[13px] font-medium transition-all ${
                activeTab === "dashboard"
                  ? "bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] border border-cyan-500/20"
                  : "text-text-secondary border border-transparent hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-[13px] font-medium transition-all ${
                activeTab === "leads"
                  ? "bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] border border-cyan-500/20"
                  : "text-text-secondary border border-transparent hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-3.833-6.242 4.147 4.147 0 00-2.038.524 4.147 4.147 0 00-2.037-.524 4.125 4.125 0 00-3.833 6.242 9.337 9.337 0 004.121.952 9.38 9.38 0 002.625-.372C15.537 15.658 15.282 14.977 15.282 14.25c0-1.851.811-3.513 2.1-4.654A4.125 4.125 0 0013.5 13.5c0 .369.048.727.14 1.069m4.11 4.559c.445-.07.881-.161 1.312-.27m0 0a9.783 9.783 0 01-2.108-.966M19.954 18.888V19.125m-9-6v-2.25m0-1.352a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" /></svg>
              Leads
            </button>
          </nav>

          <div className="absolute bottom-6 w-52">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-[13px] font-medium text-text-muted hover:text-red-400 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
              Sign out
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-10 pt-16">
          <header className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-white">
                {activeTab === "dashboard" ? "Overview" : "Lead Pipeline"}
              </h2>
              <p className="mt-1 text-[13px] text-text-muted">
                {activeTab === "dashboard" 
                  ? "At-a-glance metrics for the ITQHUB platform."
                  : "Manage incoming student enquiries and track conversions."}
              </p>
            </div>
            {loading && (
              <div className="flex items-center gap-2 text-[12px] text-text-muted">
                <div className="h-3 w-3 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
                Syncing...
              </div>
            )}
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "dashboard" && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-white/[0.05] bg-zinc-900/50 p-6 shadow-elevated">
                    <div className="text-[12px] uppercase tracking-wider text-text-muted">Total Leads</div>
                    <div className="mt-3 text-3xl font-bold text-white">{stats.total}</div>
                  </div>
                  <div className="rounded-xl border border-white/[0.05] bg-zinc-900/50 p-6 shadow-elevated">
                    <div className="text-[12px] uppercase tracking-wider text-text-muted">Most Popular Course</div>
                    <div className="mt-3 truncate text-xl font-bold text-white">{stats.mostPopular}</div>
                  </div>
                  <div className="rounded-xl border border-white/[0.05] bg-zinc-900/50 p-6 shadow-elevated">
                    <div className="text-[12px] uppercase tracking-wider text-text-muted">Conversion Rate</div>
                    <div className="mt-3 text-3xl font-bold text-accent">{stats.conversionRate}</div>
                  </div>
                </div>
              )}

              {activeTab === "leads" && (
                <div className="overflow-hidden rounded-xl border border-white/[0.05] bg-zinc-900/50 shadow-elevated">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[13px]">
                      <thead className="border-b border-white/[0.05] bg-black/40 text-[11px] uppercase tracking-wider text-text-muted">
                        <tr>
                          <th className="px-6 py-4 font-medium">Name</th>
                          <th className="px-6 py-4 font-medium">Phone</th>
                          <th className="px-6 py-4 font-medium">Target Course</th>
                          <th className="px-6 py-4 font-medium">Message</th>
                          <th className="px-6 py-4 font-medium">Date</th>
                          <th className="px-6 py-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.03]">
                        {leads.length === 0 && !loading && (
                          <tr>
                            <td colSpan="6" className="px-6 py-8 text-center text-text-muted">
                              No leads found.
                            </td>
                          </tr>
                        )}
                        {leads.map((lead) => (
                          <tr key={lead._id} className="transition-colors hover:bg-white/[0.02]">
                            <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                            <td className="px-6 py-4 font-mono text-text-secondary">{lead.phone}</td>
                            <td className="px-6 py-4 font-mono text-text-secondary">{lead.course}</td>
                            <td className="px-6 py-4 text-zinc-400 max-w-[200px] truncate" title={lead.message}>
                               {lead.message || "N/A"}
                             </td>
                            <td className="px-6 py-4 font-mono text-text-secondary">
                              {new Date(lead.createdAt).toLocaleDateString("en-US", {
                                month: "short", day: "numeric", year: "numeric"
                              })}
                            </td>
                            <td className="px-6 py-4">
                              <div className="relative inline-block">
                                <select
                                  value={lead.status}
                                  onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                                  className={`appearance-none rounded-full border px-3 py-1 pr-7 text-[11px] font-medium uppercase tracking-wider outline-none transition-all cursor-pointer ${
                                    lead.status === "new"
                                      ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400 focus:border-cyan-500/60 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                                      : lead.status === "contacted"
                                      ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-400 focus:border-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.2)]"
                                      : lead.status === "converted"
                                      ? "border-green-500/30 bg-green-500/10 text-green-400 focus:border-green-500/60 shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                                      : "border-gray-500/30 bg-gray-500/10 text-gray-400 focus:border-gray-500/60"
                                  }`}
                                >
                                  <option value="new" className="bg-zinc-900 text-white">New</option>
                                  <option value="contacted" className="bg-zinc-900 text-white">Contacted</option>
                                  <option value="converted" className="bg-zinc-900 text-white">Enrolled</option>
                                  <option value="closed" className="bg-zinc-900 text-white">Closed</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                                  <svg className="h-3 w-3 fill-current opacity-50" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                  </svg>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}
