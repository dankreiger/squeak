import type { IRestaurantsServiceEnvironment } from '@squeak-backend/restaurants-service.interfaces';
import { getProcessEnvVars } from '@squeak-backend/restaurants-service.utils';
import { typeOrmModuleOptions } from '../config/typeorm';

const env = process.env.NODE_ENV || 'development';
const processEnv = getProcessEnvVars(env);

export const environment: IRestaurantsServiceEnvironment = {
  production: false,
  configModuleOptions: {
    envFilePath: './env/.development.env',
    isGlobal: true,
  },
  typeOrmModuleOptions: typeOrmModuleOptions,
};
