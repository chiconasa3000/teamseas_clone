import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //mechanism that allows restricted resources 
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3001);
  //app.enableShutdownHooks();
}
bootstrap();
