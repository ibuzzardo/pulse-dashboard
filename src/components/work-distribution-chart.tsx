import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { WorkDistributionItem } from '@/types';

interface WorkDistributionChartProps {
  data: WorkDistributionItem[];
}

interface TooltipPayloadItem {
  name: string;
  value: number;
  payload: WorkDistributionItem;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}

function CustomTooltip({ active, payload }: CustomTooltipProps): React.ReactElement | null {
  if (!active || !payload || payload.length === 0) return null;
  const item = payload[0];
  if (!item) return null;
  return (
    <div
      style={{
        backgroundColor: '#0F172A',
        border: '1px solid #1F2937',
        borderRadius: '12px',
        padding: '8px 12px',
        fontSize: '12px',
        color: '#E5E7EB',
      }}
    >
      <p style={{ color: '#9CA3AF', marginBottom: '4px' }}>{item.name}</p>
      <p style={{ fontWeight: 600 }}>{item.value.toLocaleString()} hrs</p>
    </div>
  );
}

const TOTAL_HOURS = 1240;

export function WorkDistributionChart({ data }: WorkDistributionChartProps): React.ReactElement {
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0F172A] p-4 shadow-sm flex flex-col gap-3">
      <div>
        <h2 className="text-lg font-semibold text-[#E5E7EB]">Work Distribution</h2>
        <p className="text-sm text-[#9CA3AF]">Hours by category this month</p>
      </div>

      <div className="relative h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="hours"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              strokeWidth={0}
            >
              {data.map((entry) => (
                <Cell key={entry.category} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        {/* Center label */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-[#E5E7EB]">{TOTAL_HOURS.toLocaleString()}</span>
          <span className="text-xs text-[#9CA3AF]">hrs</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {data.map((item) => (
          <div key={item.category} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-[#9CA3AF] flex-1 truncate">{item.category}</span>
            <span className="text-sm font-medium text-[#E5E7EB]">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
