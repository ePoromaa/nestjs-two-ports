import { Test, TestingModule } from '@nestjs/testing';
import { BackOfficeController } from './backoffice.controller';
import { BackOfficeService } from './backoffice.service';

describe('BackOfficeController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [BackOfficeController],
      providers: [BackOfficeService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<BackOfficeController>(BackOfficeController);
      expect(appController.getHello()).toBe('You have reached the back office!');
    });
  });
});
