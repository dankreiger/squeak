import {
  Create,
  FormTab,
  required,
  ResourceComponentProps,
  TabbedForm,
  TextInput,
} from 'react-admin';

import { daysOfWeek } from './constants/daysOfWeek';
import { OpeningHoursEditNotice } from './OpeningHours/helper/OpeningHoursEditNotice';
import { OpeningHoursList } from './OpeningHours/inputs/OpeningHoursList';

const transform = (r: any) => {
  console.log(r);
  return r;
};
export const RestaurantCreate = (props: ResourceComponentProps) => {
  return (
    <Create {...props}>
      <TabbedForm transform={transform}>
        <FormTab label="General Info">
          {['name', 'city', 'country'].map((source) => (
            <TextInput source={source} validate={required()} />
          ))}
        </FormTab>

        {daysOfWeek.map((day) => (
          <FormTab key={day} label={day}>
            <OpeningHoursEditNotice />

            <OpeningHoursList day={day} />
          </FormTab>
        ))}
      </TabbedForm>
    </Create>
  );
};
