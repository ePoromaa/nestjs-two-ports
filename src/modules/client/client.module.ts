import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { AppService as ClientService } from './client.service';
import { SharedController } from '../shared/shared.controller';

@Module({
  imports: [],
  controllers: [ClientController, SharedController],
  providers: [ClientService],
})
export class ClientModule {}
