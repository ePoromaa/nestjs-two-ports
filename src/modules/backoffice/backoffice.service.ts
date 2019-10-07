import { Injectable } from '@nestjs/common';

@Injectable()
export class BackOfficeService {
  getBackOffice(): string {
    return 'You have reached the back office!';
  }
}
