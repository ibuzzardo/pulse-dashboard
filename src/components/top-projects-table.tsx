import type { Project } from '@/types';

const statusConfig: Record<Project['status'], { label: string; className: string }> = {
  active: {
    label: 'Active',
    className: 'bg-[#22C55E]/15 text-[#86EFAC] ring-1 ring-inset ring-[#22C55E]/30',
  },
  paused: {
    label: 'Paused',
    className: 'bg-white/10 text-[#9CA3AF] ring-1 ring-inset ring-white/10',
  },
  completed: {
    label: 'Completed',
    className: 'bg-[#60A5FA]/15 text-[#93C5FD] ring-1 ring-inset ring-[#60A5FA]/30',
  },
  'at-risk': {
    label: 'At Risk',
    className: 'bg-[#F87171]/15 text-[#FCA5A5] ring-1 ring-inset ring-[#F87171]/30',
  },
};

interface ProgressBarProps {
  value: number;
  status: Project['status'];
}

function ProgressBar({ value, status }: ProgressBarProps): React.ReactElement {
  const colorMap: Record<Project['status'], string> = {
    active: 'bg-[#60A5FA]',
    paused: 'bg-[#9CA3AF]',
    completed: 'bg-[#22C55E]',
    'at-risk': 'bg-[#F87171]',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
        <div
          className={`h-full rounded-full ${colorMap[status]}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-xs text-[#9CA3AF] w-8 text-right">{value}%</span>
    </div>
  );
}

interface TopProjectsTableProps {
  projects: Project[];
}

export function TopProjectsTable({ projects }: TopProjectsTableProps): React.ReactElement {
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0F172A] shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#1F2937]">
        <div>
          <h2 className="text-lg font-semibold text-[#E5E7EB]">Top Projects</h2>
          <p className="text-sm text-[#9CA3AF]">Performance across all active campaigns</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium border border-[#1F2937] bg-transparent text-[#E5E7EB] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]/60">
          View all
        </button>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] border-b border-[#1F2937] bg-[#0F172A]">Project</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] border-b border-[#1F2937] bg-[#0F172A]">Owner</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] border-b border-[#1F2937] bg-[#0F172A]">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] border-b border-[#1F2937] bg-[#0F172A]">Progress</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] border-b border-[#1F2937] bg-[#0F172A]">Sessions</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] border-b border-[#1F2937] bg-[#0F172A]">Conv.</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] border-b border-[#1F2937] bg-[#0F172A]">Revenue</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] border-b border-[#1F2937] bg-[#0F172A]">Updated</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={project.id}
                className={`transition-colors hover:bg-white/[0.02] ${
                  index < projects.length - 1 ? 'border-b border-[#1F2937]' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <span className="font-medium text-[#E5E7EB]">{project.name}</span>
                </td>
                <td className="px-4 py-3 text-[#9CA3AF]">{project.owner}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                      statusConfig[project.status].className
                    }`}
                  >
                    {statusConfig[project.status].label}
                  </span>
                </td>
                <td className="px-4 py-3 min-w-[140px]">
                  <ProgressBar value={project.progress} status={project.status} />
                </td>
                <td className="px-4 py-3 text-right text-[#9CA3AF]">
                  {project.sessions.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right text-[#9CA3AF]">{project.conversion}%</td>
                <td className="px-4 py-3 text-right font-medium text-[#E5E7EB]">{project.revenue}</td>
                <td className="px-4 py-3 text-right text-xs text-[#6B7280]">{project.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile list */}
      <div className="md:hidden divide-y divide-[#1F2937]">
        {projects.map((project) => (
          <div key={project.id} className="px-4 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium text-[#E5E7EB]">{project.name}</span>
              <span
                className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                  statusConfig[project.status].className
                }`}
              >
                {statusConfig[project.status].label}
              </span>
            </div>
            <div className="text-sm text-[#9CA3AF]">{project.owner}</div>
            <ProgressBar value={project.progress} status={project.status} />
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <p className="text-[#6B7280]">Sessions</p>
                <p className="text-[#E5E7EB] font-medium">{project.sessions.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-[#6B7280]">Conv.</p>
                <p className="text-[#E5E7EB] font-medium">{project.conversion}%</p>
              </div>
              <div>
                <p className="text-[#6B7280]">Revenue</p>
                <p className="text-[#E5E7EB] font-medium">{project.revenue}</p>
              </div>
            </div>
            <p className="text-xs text-[#6B7280]">Updated {project.lastUpdated}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
