import { IsObject, IsString } from 'class-validator';
import type { TOpeningHours } from '@leckerli-backend/restaurants-service.types';

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
