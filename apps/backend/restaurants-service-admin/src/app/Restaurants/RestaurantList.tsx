import { Datagrid, List, ResourceComponentProps, TextField } from 'react-admin';

export const RestaurantList = (props: ResourceComponentProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="city" />
        <TextField source="country" />
        <TextField source="openingHours" />
      </Datagrid>
    </List>
  );
};
