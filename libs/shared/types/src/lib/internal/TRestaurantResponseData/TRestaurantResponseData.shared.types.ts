import { TOpeningHours } from '../TOpeningHours';

export type TRestaurantResponseData = {
  id: number;
  name: string;
  city: string;
  country: string;
  openingHours: TOpeningHours;
};
