import { getProcessEnvVars } from '@leckerli-backend/restaurants-service.utils';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const env = process.env.NODE_ENV || 'development';
const processEnv = getProcessEnvVars(env);

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: processEnv.POSTGRES_HOST,
  port: parseInt(processEnv.POSTGRES_PORT, 10),
  username: processEnv.POSTGRES_USERNAME,
  password: processEnv.POSTGRES_PASSWORD,
  database: processEnv.POSTGRES_DATABASE,
  autoLoadEntities: true,
  synchronize: true,
};
