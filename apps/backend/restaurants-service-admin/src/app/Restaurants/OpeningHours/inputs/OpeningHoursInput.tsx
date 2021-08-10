import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { TOpeningHoursSource } from '@squeak-backend/restaurants-service-admin.types';
import { useMemo } from 'react';
import { RadioButtonGroupInput, useInput } from 'react-admin';
import { openingHoursTypeChoices } from '../../constants/openingHoursTypeChoices';
import { timeFns } from '../../utils/timeFns';
import { useOpeningTimes } from './hooks/useOpeningTimes';

export const OpeningHoursInput = ({
  valueSource,
  typeSource,
}: {
  valueSource: TOpeningHoursSource<'value'>;
  typeSource: TOpeningHoursSource<'type'>;
}) => {
  const { selectedTime, handleTimeInputChange } = useOpeningTimes({
    valueSource,
  });
  const {
    input: { value },
  } = useInput({ source: valueSource });
  const initialTime = useMemo(
    () => timeFns.secondsSinceMidnightToDate(value as number),
    [value]
  );
  console.log(useInput({ source: '' }));
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time"
          value={selectedTime || initialTime || null}
          onChange={handleTimeInputChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </MuiPickersUtilsProvider>
      <RadioButtonGroupInput
        source={typeSource}
        label="Type"
        style={{ marginLeft: '30px' }}
        choices={openingHoursTypeChoices}
      />
    </div>
  );
};
