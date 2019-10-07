import { Controller, Get } from '@nestjs/common';
import { AppService } from './client.service';

@Controller()
export class ClientController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
