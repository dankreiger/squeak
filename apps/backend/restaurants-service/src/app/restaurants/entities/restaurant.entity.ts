import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import type { TOpeningHours } from '@leckerli-backend/restaurants-service.types';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  country: string;

  /**
   * restaurant's opening times
   * in local timezone of restaurant's location
   */
  @Column('json')
  openingHours: TOpeningHours;
}
