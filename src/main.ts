import { NestFactory } from '@nestjs/core';
import { ClientModule } from './modules/client/client.module';
import * as express from 'express';
import * as http from 'http';
import {ExpressAdapter} from '@nestjs/platform-express';
import { BackOfficeModule } from './modules/backoffice/backoffice.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const clientServer = express();
  const clientApp = await NestFactory.create(
    ClientModule,
    new ExpressAdapter(clientServer),
  );
  await clientApp.init();

  const backOfficeServer = express();
  const backOfficeApp = await NestFactory.create(
    BackOfficeModule,
    new ExpressAdapter(backOfficeServer),
  );
  

  const options = new DocumentBuilder()
    .setTitle('BackOffice')
    .setDescription('The back office API description')
    .setVersion('1.0')
    .addTag('backOffice')
    .build();
  const document = SwaggerModule.createDocument(backOfficeApp, options);
  SwaggerModule.setup('api', backOfficeApp, document);
  await backOfficeApp.init();

  http.createServer(clientServer).listen(3000); // The public port (Load balancer will route traffic to this port)
  http.createServer(backOfficeServer).listen(4000); // A port that will not be exposed public (Will be accessed through a bastian host or similar)
}
bootstrap();
