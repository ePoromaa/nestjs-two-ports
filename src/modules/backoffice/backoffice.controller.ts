import { Controller, Get } from '@nestjs/common';
import { BackOfficeService } from './backoffice.service';

@Controller()
export class BackOfficeController {
  constructor(private readonly backOfficeService: BackOfficeService) {}

  @Get()
  getHello(): string {
    return this.backOfficeService.getBackOffice();
  }
}
