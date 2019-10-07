import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as http from 'http';
import {ExpressAdapter} from '@nestjs/platform-express';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  
  const server = express();
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );
  await app.init();
  
  http.createServer(server).listen(3000);
  http.createServer(server).listen(443);
}
bootstrap();
