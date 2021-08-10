import { FC } from 'react';
import { AppHeaderDropdownWrapperSt } from './app-header-dropdown.frontend.web.app.components.css';
import { IAppHeaderDropdownProps } from './types';

export const AppHeaderDropdown: FC<IAppHeaderDropdownProps> = ({
  onChange,
  items,
  value,
}) => (
  <AppHeaderDropdownWrapperSt>
    <select aria-label="" onChange={onChange} value={value}>
      {items.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </AppHeaderDropdownWrapperSt>
);
