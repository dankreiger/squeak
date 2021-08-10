import { ChangeEventHandler } from 'react';

export interface IAppHeaderDropdownProps {
  items: { value: string; text: string }[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  value: string;
}
