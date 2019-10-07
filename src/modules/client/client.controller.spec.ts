import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { AppService } from './client.service';

describe('ClientController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<ClientController>(ClientController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
