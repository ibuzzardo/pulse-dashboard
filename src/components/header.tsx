"use client"

import { Search, Bell, RefreshCw, Download } from 'lucide-react';

interface HeaderProps {
  onRefresh: () => void;
  lastUpdated: string;
}

export function Header({ onRefresh, lastUpdated }: HeaderProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#E5E7EB]">Analytics Dashboard</h1>
        <p className="text-sm text-[#9CA3AF] mt-0.5">Last updated {lastUpdated}</p>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-48 rounded-lg border border-[#1F2937] bg-[#0B1220] pl-9 pr-3 text-sm text-[#E5E7EB] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#93C5FD]/60 focus:border-transparent transition-shadow"
          />
        </div>

        {/* Date range selector */}
        <select className="h-10 rounded-lg border border-[#1F2937] bg-[#0B1220] px-3 text-sm text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#93C5FD]/60 transition-colors cursor-pointer">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
          <option>This year</option>
        </select>

        {/* Refresh */}
        <button
          onClick={onRefresh}
          className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-white/10 text-[#E5E7EB] hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]/60 active:translate-y-px"
          title="Refresh data"
        >
          <RefreshCw size={14} />
          <span className="hidden sm:inline">Refresh</span>
        </button>

        {/* Export */}
        <button
          className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-[#60A5FA] text-[#0B1220] hover:bg-[#60A5FA]/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]/60 active:translate-y-px"
        >
          <Download size={14} />
          <span className="hidden sm:inline">Export</span>
        </button>

        {/* Notifications */}
        <button className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border border-[#1F2937] bg-transparent text-[#E5E7EB] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]/60">
          <Bell size={16} />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#F87171]" />
        </button>
      </div>
    </div>
  );
}
