import type { TOpeningHoursSource } from '@squeak-backend/restaurants-service-admin.types';
import { useCallback, useState } from 'react';
import { useInput } from 'react-admin';
import { timeFns } from '../../../utils/timeFns';
export const useOpeningTimes = ({
  valueSource,
}: {
  valueSource: TOpeningHoursSource<'value'>;
}): {
  selectedTime: Date | null;
  handleTimeInputChange: (time: Date | null) => void;
} => {
  const { input: valueInput } = useInput({
    source: valueSource,
    isRequired: true,
  });

  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const handleTimeInputChange = useCallback(
    (time: Date | null) => {
      // set UI component
      setSelectedTime(time);
      // set expected date format in form data
      valueInput.onChange(
        timeFns.dateToSecondsSinceMidnight(time) ?? undefined
      );
    },
    [setSelectedTime, valueInput]
  );

  return {
    selectedTime,
    handleTimeInputChange,
  };
};
