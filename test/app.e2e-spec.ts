import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ClientModule } from '../src/modules/client/client.module';
import { INestApplication } from '@nestjs/common';

describe('ClientController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [ClientModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
