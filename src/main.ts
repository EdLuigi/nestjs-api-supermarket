import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nestjs Supermarket Documentation')
    .setDescription('The "nestjs supermarket API" project description.')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .addTag(
      'Auth',
      'Authentication related operations, no permissions required',
    )
    .addTag('Users', 'Users related operations, login and permissions required')
    .addTag('Roles', 'Roles related operations, login and permissions required')
    .addTag(
      'Permissions',
      'Permissions related operations, login and permissions required',
    )
    .addTag(
      'User-Roles',
      'User-Roles foreign keys related operations, login and permissions required',
    )
    .addTag(
      'Role-Permissions',
      'Role-Permissions foreign keys related operations, login and permissions required',
    )
    .addTag(
      'Suppliers',
      'Suppliers related operations, login and permissions required',
    )
    .addTag(
      'Products',
      'Products related operations, login and permissions required',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
