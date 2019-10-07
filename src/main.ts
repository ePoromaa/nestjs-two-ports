import { NestFactory } from '@nestjs/core';
import { ClientModule } from './modules/client/client.module';
import * as express from 'express';
import * as http from 'http';
import {ExpressAdapter} from '@nestjs/platform-express';
import { BackOfficeModule } from './modules/backoffice/backoffice.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const clientServer = express();
  const clientApp = await NestFactory.create(
    ClientModule,
    new ExpressAdapter(clientServer),
  );
  const clientOptions = new DocumentBuilder()
    .setTitle('ClientServer')
    .setDescription('The client server API description')
    .setVersion('1.0')
    .addTag('client')
    .build();
  const clientDocument = SwaggerModule.createDocument(clientApp, clientOptions);
  SwaggerModule.setup('api', clientApp, clientDocument);
  await clientApp.init();

  const backOfficeServer = express();
  const backOfficeApp = await NestFactory.create(
    BackOfficeModule,
    new ExpressAdapter(backOfficeServer),
  );

  const backOfficeOptions = new DocumentBuilder()
    .setTitle('BackOffice')
    .setDescription('The back office API description')
    .setVersion('1.0')
    .addTag('backOffice')
    .build();
  const backOfficeDocument = SwaggerModule.createDocument(backOfficeApp, backOfficeOptions);
  SwaggerModule.setup('api', backOfficeApp, backOfficeDocument);
  await backOfficeApp.init();

  http.createServer(clientServer).listen(3000); // The public port (Load balancer will route traffic to this port)
  http.createServer(backOfficeServer).listen(4000); // The private port (Will be accessed through a bastian host or similar)
}
bootstrap();
