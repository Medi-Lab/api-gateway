import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from "@nestjs/config";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get<ConfigService>(ConfigService);

    app.useGlobalPipes(new ValidationPipe());

    const configSwagger = new DocumentBuilder()
        .setTitle('MedLab')
        .setDescription('Api-gateway API description')
        .setVersion('1.0')
        .addTag('api-gateway')
        .build();

    const document = SwaggerModule.createDocument(app, configSwagger);
    SwaggerModule.setup('api', app, document);
    
    const port = config.get('PORT');
    await app.listen(Number(port));
}

bootstrap();
