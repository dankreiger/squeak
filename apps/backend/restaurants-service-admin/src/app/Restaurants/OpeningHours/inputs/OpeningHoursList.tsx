import {
  ArrayInput,
  FormDataConsumer,
  SimpleFormIterator,
  useNotify,
} from 'react-admin';
import { EDayOfWeek } from '../../types/enums';
import { TOpeningHoursSource } from '../../types/types';
import {
  getInvalidOpeningTimesNotification,
  getSourceGetterNotAFunction,
} from '../../utils/notifications';
import { OpeningHoursInput } from './OpeningHoursInput';

export const OpeningHoursList = ({ day }: { day: EDayOfWeek }) => {
  const notify = useNotify();
  return (
    <ArrayInput source={`openingHours[${day}]`} label={day}>
      <SimpleFormIterator>
        <FormDataConsumer>
          {({ getSource }) => {
            if (typeof getSource !== 'function') {
              notify(getSourceGetterNotAFunction(getSource));
              return '';
            }
            const valueSource = getSource('value');
            const typeSource = getSource('type');

            if (valueSource && typeSource) {
              return (
                <OpeningHoursInput
                  valueSource={valueSource as TOpeningHoursSource<'value'>}
                  typeSource={typeSource as TOpeningHoursSource<'type'>}
                />
              );
            } else {
              notify(getInvalidOpeningTimesNotification(getSource));
            }
            return '';
          }}
        </FormDataConsumer>
      </SimpleFormIterator>
    </ArrayInput>
  );
};
