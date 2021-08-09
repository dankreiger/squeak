import { ConfigModuleOptions } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IRestaurantsServiceEnvironment {
  production: boolean;
  configModuleOptions: ConfigModuleOptions;
  typeOrmModuleOptions: TypeOrmModuleOptions;
}
