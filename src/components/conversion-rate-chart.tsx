import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import type { ConversionPoint } from '@/types';

interface ConversionRateChartProps {
  data: ConversionPoint[];
}

export function ConversionRateChart({ data }: ConversionRateChartProps): React.ReactElement {
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0F172A] p-4 shadow-sm flex flex-col gap-3">
      <div>
        <h2 className="text-lg font-semibold text-[#E5E7EB]">Conversion Rate</h2>
        <p className="text-sm text-[#9CA3AF]">Actual vs 4% goal</p>
      </div>

      <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-4 rounded-full bg-[#60A5FA] inline-block" />
          Actual
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-px w-4 border-t-2 border-dashed border-[#F59E0B] inline-block" />
          Goal (4%)
        </span>
      </div>

      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" vertical={false} />
            <XAxis
              dataKey="date"
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              interval={4}
            />
            <YAxis
              domain={[0, 6]}
              tickFormatter={(v: number) => `${v}%`}
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
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
              formatter={(value: number) => [`${value.toFixed(2)}%`, 'Rate']}
            />
            <ReferenceLine
              y={4}
              stroke="#F59E0B"
              strokeDasharray="4 4"
              strokeWidth={1.5}
            />
            <Line
              type="monotone"
              dataKey="rate"
              name="Conversion Rate"
              stroke="#60A5FA"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#60A5FA' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#1F2937]">
        <div className="text-center">
          <p className="text-xs text-[#9CA3AF]">Current</p>
          <p className="text-sm font-semibold text-[#E5E7EB]">3.68%</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-[#9CA3AF]">Peak</p>
          <p className="text-sm font-semibold text-[#22C55E]">4.40%</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-[#9CA3AF]">Goal</p>
          <p className="text-sm font-semibold text-[#F59E0B]">4.00%</p>
        </div>
      </div>
    </div>
  );
}
