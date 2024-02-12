import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { API_CONFIG, API_TAGS } from './shared/constants/api.constants';
import { PORT } from './shared/constants/app.constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger

  const documentBuilder = new DocumentBuilder()
    .setTitle(API_CONFIG.title)
    .setDescription(API_CONFIG.description)
    .setVersion(API_CONFIG.version)
    .addBearerAuth();
  API_TAGS.forEach((tag) => {
    documentBuilder.addTag(tag.name, tag.description);
  });
  const config = documentBuilder.build();
  const document = SwaggerModule.createDocument(app, config);

  // Swagger UI
  const swaggerCustomOptions: SwaggerCustomOptions = {
    customSiteTitle: API_CONFIG.customSiteTitle,
  };

  SwaggerModule.setup(API_CONFIG.path, app, document, swaggerCustomOptions);

  // ValidationPipe && Transform
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(PORT);
}
bootstrap();
