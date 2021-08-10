import { ReactNode } from 'react';

export interface IPanelProps {
  header: ReactNode;
  rows: { vdomKey: string; content: ReactNode }[];
}
