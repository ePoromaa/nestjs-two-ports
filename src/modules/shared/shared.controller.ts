import { Controller, Get } from "@nestjs/common";

@Controller()
export class SharedController {

    @Get('/share')
    shared(): string {
    return 'shared';
  }
}