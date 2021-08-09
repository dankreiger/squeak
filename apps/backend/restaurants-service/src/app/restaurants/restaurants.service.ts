import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantsRepository: Repository<Restaurant>
  ) {}

  async findAll() {
    try {
      const restaurants = await this.restaurantsRepository.find();
      return restaurants;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    const restaurant = await this.restaurantsRepository.findOne(id);
    if (!restaurant) {
      throw new NotFoundException(`Restaurant ${id} not found`);
    }
    return restaurant;
  }

  create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = this.restaurantsRepository.create(createRestaurantDto);
    return this.restaurantsRepository.save(restaurant);
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    const restaurant = await this.restaurantsRepository.preload({
      id: +id,
      ...updateRestaurantDto,
    });
    if (!restaurant) {
      throw new NotFoundException(`Restaurant #${id} not found.`);
    }
    return this.restaurantsRepository.save(restaurant);
  }

  async remove(id: string) {
    const restaurant = await this.restaurantsRepository.findOne(id);
    return this.restaurantsRepository.remove(restaurant);
  }
}
