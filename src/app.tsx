"use client"

import { useState, useCallback } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { OverviewCard } from '@/components/overview-card';
import { TrafficChart } from '@/components/traffic-chart';
import { WorkDistributionChart } from '@/components/work-distribution-chart';
import { TopProjectsTable } from '@/components/top-projects-table';
import { ActivityFeed } from '@/components/activity-feed';
import { kpiMetrics, trafficData, projects, activityItems, workDistribution } from '@/mock-data';

export function App(): React.ReactElement {
  const [lastUpdated, setLastUpdated] = useState<string>('just now');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleRefresh = useCallback(async (): Promise<void> => {
    try {
      setIsRefreshing(true);
      await new Promise<void>((resolve) => setTimeout(resolve, 800));
      setLastUpdated('just now');
    } catch (error) {
      console.error('Failed to refresh data:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E5E7EB] antialiased">
      <div className="flex">
        <aside className="hidden md:flex w-72 shrink-0 border-r border-[#1F2937] bg-[#0F172A] sticky top-0 h-screen overflow-y-auto">
          <Sidebar />
        </aside>
        <div className="flex-1 min-w-0">
          <header className="sticky top-0 z-20 flex flex-col gap-3 border-b border-[#1F2937] bg-[#0B1220]/80 px-4 py-4 backdrop-blur md:flex-row md:items-center md:justify-between md:px-6">
            <Header onRefresh={handleRefresh} lastUpdated={lastUpdated} />
          </header>
          <main className="px-4 py-6 md:px-6 xl:px-8">
            {isRefreshing && (
              <div className="mb-4 flex items-center gap-2 text-sm text-[#9CA3AF]">
                <div className="h-3 w-3 animate-spin rounded-full border-2 border-[#60A5FA] border-t-transparent" />
                Refreshing data...
              </div>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {kpiMetrics.map((metric) => (
                <OverviewCard key={metric.id} metric={metric} />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <TrafficChart data={trafficData} />
              </div>
              <div className="xl:col-span-1">
                <WorkDistributionChart data={workDistribution} />
              </div>
            </div>
            <div className="mt-6">
              <TopProjectsTable projects={projects} />
            </div>
            <div className="mt-6">
              <ActivityFeed items={activityItems} />
            </div>
            <div className="mt-8 pb-4 text-center text-xs text-[#6B7280]">
              Pulse Dashboard v4 &mdash; Built by Dark Factory &mdash; Data refreshes every 5 minutes
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
