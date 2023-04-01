import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('404 test (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/randomroutethatdoesntexist (GET)', () => {
    return request(app.getHttpServer())
      .get('/randomroutethatdoesntexist')
      .expect(404);
  });

  it('/randomroutethatdoesntexist (POST)', () => {
    return request(app.getHttpServer())
      .post('/randomroutethatdoesntexist')
      .expect(404);
  });

  it('/randomroutethatdoesntexist (PUT)', () => {
    return request(app.getHttpServer())
      .put('/randomroutethatdoesntexist')
      .expect(404);
  });

  it('/randomroutethatdoesntexist (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/randomroutethatdoesntexist')
      .expect(404);
  });

  it('/randomroutethatdoesntexist (HEAD)', () => {
    return request(app.getHttpServer())
      .head('/randomroutethatdoesntexist')
      .expect(404);
  });

  it('/randomroutethatdoesntexist (OPTIONS)', () => {
    return request(app.getHttpServer())
      .options('/randomroutethatdoesntexist')
      .expect(404);
  });

  it('/randomroutethatdoesntexist (TRACE)', () => {
    return request(app.getHttpServer())
      .trace('/randomroutethatdoesntexist')
      .expect(404);
  });
});
