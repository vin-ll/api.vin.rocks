import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose, { ConnectOptions } from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
import helmet from 'helmet';

mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
  )
  .catch((err) => {
    throw new Error(err);
  });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
