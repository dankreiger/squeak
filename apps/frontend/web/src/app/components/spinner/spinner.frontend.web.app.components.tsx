import { useEffect, useState } from 'react';
import {
  SpinnerOverlaySt,
  SpinnerWrapperSt,
} from './spinner.frontend.web.app.components.css';

export const Spinner = ({ delay }: { delay: number }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => {
      clearTimeout(id);
    };
  });

  if (!visible) return null;

  return (
    <SpinnerOverlaySt>
      <SpinnerWrapperSt />
    </SpinnerOverlaySt>
  );
};
