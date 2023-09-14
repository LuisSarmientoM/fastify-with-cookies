import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyCookie from '@fastify/cookie';
import helmet from '@fastify/helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  //   If remove async, it will throw error like this: Plugin did not start in time: '() => cookie_1.default'.
  await app.register(fastifyCookie, {
    secret: 'my-secret',
  });
  await app.register(helmet);
  await app.listen(3000);
}
bootstrap();
