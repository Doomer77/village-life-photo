import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder } from '@nestjs/swagger'
import { SwaggerModule } from '@nestjs/swagger/dist'

async function bootstrap() {
  const PORT = process.env.PORT || 5000

  const app = await NestFactory.create(AppModule)
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('village-life-api')
    .setDescription('Document Swagger UI API')
    .setVersion('0.0.1')
    .addTag('VLP')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}
bootstrap()
