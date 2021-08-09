import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { RestaurantList } from './Restaurants/RestaurantList';
import { RestaurantEdit } from './Restaurants/RestaurantEdit';
import { RestaurantsShow } from './Restaurants/RestaurantsShow';
import { RestaurantCreate } from './Restaurants/RestaurantCreate';

const dataProvider = jsonServerProvider('/api');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="restaurants"
      create={RestaurantCreate}
      list={RestaurantList}
      show={RestaurantsShow}
      edit={RestaurantEdit}
    />
  </Admin>
);

export default App;
