import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Response,
} from '@nestjs/common';
import { Response as Res } from 'express';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Get()
  async findAll(@Query() paginationQuery, @Response() res: Res) {
    const { limit, offset } = paginationQuery;
    const data = await this.restaurantService.findAll();
    return res.set({ 'X-Total-Count': data.length, limit, offset }).json(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(id);
  }

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.create(createRestaurantDto);
  }

  // testing action for seeding dummy data
  @Post('/seed')
  seed() {
    return this.restaurantService.seedDummyData();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto
  ) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }

  // testing action for removing all data
  @Post('nuke')
  nuke() {
    return this.restaurantService.nuke();
  }
}
