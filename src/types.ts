export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  rawValue: number;
  delta: number;
  deltaLabel: string;
  icon: string;
}

export interface TrafficPoint {
  date: string;
  sessions: number;
  pageViews: number;
  uniqueVisitors: number;
}

export interface ConversionPoint {
  date: string;
  rate: number;
  goal: number;
}

export interface Project {
  id: string;
  name: string;
  owner: string;
  status: 'active' | 'paused' | 'completed' | 'at-risk';
  progress: number;
  sessions: number;
  conversion: number;
  revenue: string;
  lastUpdated: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'away' | 'offline';
}

export type DeltaDirection = 'positive' | 'negative' | 'neutral';

export interface ActivityItem {
  id: string;
  type: 'deploy' | 'commit' | 'review' | 'alert' | 'merge';
  message: string;
  user: string;
  project: string;
  timestamp: string;
}

export interface WorkDistributionItem {
  category: string;
  hours: number;
  percentage: number;
  color: string;
}
