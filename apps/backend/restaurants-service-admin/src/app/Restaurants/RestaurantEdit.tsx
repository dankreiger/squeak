import {
  Edit,
  FormTab,
  ResourceComponentPropsWithId,
  TabbedForm,
  TextInput,
} from 'react-admin';
import { daysOfWeek } from './constants/daysOfWeek';
import { OpeningHoursEditNotice } from './OpeningHours/helper/OpeningHoursEditNotice';
import { OpeningHoursList } from './OpeningHours/inputs/OpeningHoursList';

const transform = (p: any) => {
  return p;
};
export const RestaurantEdit = (props: ResourceComponentPropsWithId) => (
  <Edit {...props}>
    <TabbedForm transform={transform}>
      <FormTab label="General Info">
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="city" />
        <TextInput source="country" />
      </FormTab>

      {daysOfWeek.map((day) => (
        <FormTab key={day} label={day}>
          <OpeningHoursEditNotice />
          <OpeningHoursList day={day} />
        </FormTab>
      ))}
    </TabbedForm>
  </Edit>
);
