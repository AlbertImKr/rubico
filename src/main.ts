import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { API_TAGS } from './shared/constants/api.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger

  const documentBuilder = new DocumentBuilder()
    .setTitle('Rubicon API')
    .setDescription('Copy of Rallit')
    .setVersion('1.0')
    .addBearerAuth();
  API_TAGS.forEach((tag) => {
    documentBuilder.addTag(tag.name, tag.description);
  });
  const config = documentBuilder.build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // ValidationPipe && Transform
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(3000);
}
bootstrap();
