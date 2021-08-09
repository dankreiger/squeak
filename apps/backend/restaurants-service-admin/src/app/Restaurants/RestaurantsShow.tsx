import {
  Show,
  SimpleShowLayout,
  TextField,
  ResourceComponentProps,
} from 'react-admin';
export const RestaurantsShow = (props: ResourceComponentProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="city" />
      <TextField source="country" />
      {/* <OpeningsHoursField source="openingHours" /> */}
    </SimpleShowLayout>
  </Show>
);
