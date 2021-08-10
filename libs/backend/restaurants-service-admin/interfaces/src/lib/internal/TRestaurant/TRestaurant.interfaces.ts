import type { TOpeningHours } from '@squeak-backend/restaurants-service.types';

export interface TRestaurant {
  name: string;
  city: string;
  country: string;
  openingHours: TOpeningHours;
}
