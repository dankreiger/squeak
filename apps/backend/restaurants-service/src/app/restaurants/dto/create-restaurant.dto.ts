import type { TOpeningHours } from '@squeak-shared.types';
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
