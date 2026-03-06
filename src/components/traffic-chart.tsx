import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { TrafficPoint } from '@/types';

interface TrafficChartProps {
  data: TrafficPoint[];
}

function formatYAxis(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return String(value);
}

export function TrafficChart({ data }: TrafficChartProps): React.ReactElement {
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0F172A] p-4 shadow-sm flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[#E5E7EB]">Traffic Overview</h2>
          <p className="text-sm text-[#9CA3AF]">Sessions, page views & unique visitors</p>
        </div>
        <select className="h-8 rounded-lg border border-[#1F2937] bg-[#0B1220] px-2 text-xs text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#93C5FD]/60 transition-colors cursor-pointer">
          <option>Weekly</option>
          <option>Daily</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A78BFA" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUniqueVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: '#9CA3AF', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              interval={3}
            />
            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fill: '#9CA3AF', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0F172A',
                border: '1px solid #1F2937',
                borderRadius: '12px',
                color: '#E5E7EB',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#9CA3AF', marginBottom: '4px' }}
              formatter={(value: number, name: string) => [
                formatYAxis(value),
                name === 'sessions' ? 'Sessions' : name === 'pageViews' ? 'Page Views' : 'Unique Visitors',
              ]}
            />
            <Legend
              wrapperStyle={{ fontSize: '12px', color: '#9CA3AF', paddingTop: '8px' }}
              formatter={(value: string) =>
                value === 'sessions' ? 'Sessions' : value === 'pageViews' ? 'Page Views' : 'Unique Visitors'
              }
            />
            <Area
              type="monotone"
              dataKey="sessions"
              stroke="#60A5FA"
              strokeWidth={2}
              fill="url(#colorSessions)"
              dot={false}
              activeDot={{ r: 4, fill: '#60A5FA' }}
            />
            <Area
              type="monotone"
              dataKey="pageViews"
              stroke="#A78BFA"
              strokeWidth={2}
              fill="url(#colorPageViews)"
              dot={false}
              activeDot={{ r: 4, fill: '#A78BFA' }}
            />
            <Area
              type="monotone"
              dataKey="uniqueVisitors"
              stroke="#22C55E"
              strokeWidth={2}
              fill="url(#colorUniqueVisitors)"
              dot={false}
              activeDot={{ r: 4, fill: '#22C55E' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
