import type { TOpeningHours } from '@squeak-backend/restaurants-service.types';
import { IsObject, IsString } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly country: string;

  @IsObject()
  readonly openingHours: TOpeningHours;
}
