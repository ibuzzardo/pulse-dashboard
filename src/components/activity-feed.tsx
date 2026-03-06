import { Rocket, GitCommit, Eye, AlertTriangle, GitMerge } from 'lucide-react';
import type { ActivityItem } from '@/types';

interface ActivityFeedProps {
  items: ActivityItem[];
}

type EventType = ActivityItem['type'];

interface EventConfig {
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const eventConfig: Record<EventType, EventConfig> = {
  deploy: {
    icon: <Rocket size={14} />,
    color: '#22C55E',
    bgColor: 'rgba(34, 197, 94, 0.1)',
  },
  commit: {
    icon: <GitCommit size={14} />,
    color: '#60A5FA',
    bgColor: 'rgba(96, 165, 250, 0.1)',
  },
  review: {
    icon: <Eye size={14} />,
    color: '#A78BFA',
    bgColor: 'rgba(167, 139, 250, 0.1)',
  },
  alert: {
    icon: <AlertTriangle size={14} />,
    color: '#F59E0B',
    bgColor: 'rgba(245, 158, 11, 0.1)',
  },
  merge: {
    icon: <GitMerge size={14} />,
    color: '#2DD4BF',
    bgColor: 'rgba(45, 212, 191, 0.1)',
  },
};

export function ActivityFeed({ items }: ActivityFeedProps): React.ReactElement {
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0F172A] p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-[#E5E7EB]">Recent Activity</h2>
        <p className="text-sm text-[#9CA3AF]">Latest events across all projects</p>
      </div>
      <div className="max-h-[480px] overflow-y-auto">
        {items.map((item) => {
          const config = eventConfig[item.type];
          return (
            <div
              key={item.id}
              className="flex items-start gap-3 py-3 border-b border-[#1F2937] last:border-b-0"
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg mt-0.5"
                style={{ backgroundColor: config.bgColor, color: config.color }}
              >
                {config.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#E5E7EB] leading-snug">{item.message}</p>
                <p className="mt-1 text-xs text-[#6B7280]">{item.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
