import { Module } from '@nestjs/common';
import { BackOfficeController } from './backoffice.controller';
import { BackOfficeService } from './backoffice.service';
import { SharedController } from '../shared/shared.controller';

@Module({
  imports: [],
  controllers: [BackOfficeController, SharedController],
  providers: [BackOfficeService],
})
export class BackOfficeModule {}
