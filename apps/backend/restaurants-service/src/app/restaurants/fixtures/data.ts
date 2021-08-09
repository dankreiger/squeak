import {
  EDayOfWeek,
  EOpeningHoursDataType,
} from '@leckerli-backend/restaurants-service.enums';
import { Restaurant } from '../entities/restaurant.entity';

const openingHours = {
  [EDayOfWeek.MONDAY]: [],
  [EDayOfWeek.TUESDAY]: [
    { type: EOpeningHoursDataType.OPEN, value: 36000 },
    { type: EOpeningHoursDataType.CLOSE, value: 64800 },
  ],
  [EDayOfWeek.WEDNESDAY]: [],
  [EDayOfWeek.THURSDAY]: [
    { type: EOpeningHoursDataType.OPEN, value: 36000 },
    { type: EOpeningHoursDataType.CLOSE, value: 64800 },
  ],
  [EDayOfWeek.FRIDAY]: [
    {
      type: EOpeningHoursDataType.OPEN,
      value: 64800,
    },
  ],
  [EDayOfWeek.SATURDAY]: [
    {
      type: EOpeningHoursDataType.CLOSE,
      value: 3600,
    },
    {
      type: EOpeningHoursDataType.OPEN,
      value: 32400,
    },
    {
      type: EOpeningHoursDataType.CLOSE,
      value: 39600,
    },
    {
      type: EOpeningHoursDataType.OPEN,
      value: 57600,
    },
  ],
  [EDayOfWeek.SUNDAY]: [
    { type: EOpeningHoursDataType.CLOSE, value: 3600 },
    { type: EOpeningHoursDataType.OPEN, value: 43333 },
    { type: EOpeningHoursDataType.CLOSE, value: 75600 },
  ],
};

export const allRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Puppy Food',
    openingHours,
    city: 'Berlin',
    country: 'Germany',
  },
  {
    id: 2,
    name: 'Cat Sneeze',
    openingHours,
    city: 'Berlin',
    country: 'Germany',
  },
  {
    id: 3,
    name: 'Mouse Squeak',
    openingHours,
    city: 'Berlin',
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Pizza Hut',
    openingHours,
    city: 'Berlin',
    country: 'Germany',
  },
];
