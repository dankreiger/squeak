import { PanelDividerSt, PanelWrapperSt } from './panel.components.css';
import { IPanelProps } from './types';

export const Panel = ({ header, rows }: IPanelProps) => (
  <PanelWrapperSt>
    <div>{header}</div>
    <PanelDividerSt />
    <div>
      {rows.map(({ vdomKey, content }) => (
        <div key={vdomKey}>{content}</div>
      ))}
    </div>
  </PanelWrapperSt>
);
