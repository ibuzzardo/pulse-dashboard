import { Activity, Users, TrendingUp, DollarSign, TrendingDown, Minus } from 'lucide-react';
import type { KpiMetric, DeltaDirection } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
  activity: <Activity size={18} />,
  users: <Users size={18} />,
  'trending-up': <TrendingUp size={18} />,
  'dollar-sign': <DollarSign size={18} />,
};

function getDeltaDirection(delta: number): DeltaDirection {
  if (delta > 0) return 'positive';
  if (delta < 0) return 'negative';
  return 'neutral';
}

interface DeltaChipProps {
  delta: number;
  label: string;
}

function DeltaChip({ delta, label }: DeltaChipProps): React.ReactElement {
  const direction = getDeltaDirection(delta);

  const chipClass =
    direction === 'positive'
      ? 'bg-[#22C55E]/15 text-[#86EFAC] ring-1 ring-inset ring-[#22C55E]/30'
      : direction === 'negative'
      ? 'bg-[#F87171]/15 text-[#FCA5A5] ring-1 ring-inset ring-[#F87171]/30'
      : 'bg-white/10 text-[#9CA3AF] ring-1 ring-inset ring-white/10';

  const Icon =
    direction === 'positive' ? TrendingUp : direction === 'negative' ? TrendingDown : Minus;

  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${chipClass}`}>
      <Icon size={10} />
      {Math.abs(delta)}% {label}
    </span>
  );
}

interface OverviewCardProps {
  metric: KpiMetric;
}

export function OverviewCard({ metric }: OverviewCardProps): React.ReactElement {
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0F172A] p-4 shadow-sm flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-[#9CA3AF] font-medium">{metric.label}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#60A5FA]/10 text-[#60A5FA]">
          {iconMap[metric.icon] ?? <Activity size={18} />}
        </span>
      </div>
      <div>
        <p className="text-3xl font-semibold tracking-tight text-[#E5E7EB]">{metric.value}</p>
      </div>
      <DeltaChip delta={metric.delta} label={metric.deltaLabel} />
    </div>
  );
}
