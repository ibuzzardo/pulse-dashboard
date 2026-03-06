import { BarChart2, Activity, Users, TrendingUp, Settings, Bell, FolderKanban, LayoutDashboard } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
  { label: 'Analytics', icon: <BarChart2 size={18} /> },
  { label: 'Projects', icon: <FolderKanban size={18} /> },
  { label: 'Traffic', icon: <Activity size={18} /> },
  { label: 'Audience', icon: <Users size={18} /> },
  { label: 'Conversions', icon: <TrendingUp size={18} /> },
];

const bottomItems: NavItem[] = [
  { label: 'Notifications', icon: <Bell size={18} /> },
  { label: 'Settings', icon: <Settings size={18} /> },
];

export function Sidebar(): React.ReactElement {
  return (
    <div className="flex h-screen w-72 flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-[#1F2937]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#60A5FA]">
          <Activity size={16} className="text-[#0B1220]" />
        </div>
        <span className="text-lg font-semibold text-[#E5E7EB] tracking-tight">Pulse</span>
        <span className="ml-auto text-xs font-medium text-[#60A5FA] bg-[#60A5FA]/10 px-2 py-0.5 rounded-md">v4</span>
      </div>

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Main</p>
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]/60 ${
              item.active
                ? 'bg-[#60A5FA]/10 text-[#60A5FA]'
                : 'text-[#9CA3AF] hover:bg-white/5 hover:text-[#E5E7EB]'
            }`}
          >
            {item.active && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-r bg-[#60A5FA]" />
            )}
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom nav */}
      <div className="border-t border-[#1F2937] px-3 py-4 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-[#9CA3AF] hover:bg-white/5 hover:text-[#E5E7EB] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]/60"
          >
            {item.icon}
            {item.label}
          </button>
        ))}

        {/* User avatar */}
        <div className="mt-3 flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#A78BFA]/20 text-xs font-semibold text-[#A78BFA]">
            SC
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-[#E5E7EB]">Sarah Chen</p>
            <p className="truncate text-xs text-[#9CA3AF]">Lead Engineer</p>
          </div>
          <div className="ml-auto h-2 w-2 rounded-full bg-[#22C55E]" />
        </div>
      </div>
    </div>
  );
}
