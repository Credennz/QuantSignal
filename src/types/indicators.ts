import { LucideIcon } from 'lucide-react';

export interface Indicator {
  id: number;
  name: string;
  description: string;
  accuracy: string;
  signals: string;
  icon: LucideIcon;
  chartImage: string;
}