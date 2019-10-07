import { Module } from '@nestjs/common';
import { BackOfficeController } from './backoffice.controller';
import { BackOfficeService } from './backoffice.service';

@Module({
  imports: [],
  controllers: [BackOfficeController],
  providers: [BackOfficeService],
})
export class BackOfficeModule {}
