import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, // 모든 origin 허용
    methods: '*', // 모든 HTTP 메서드 허용
    allowedHeaders: '*', // 모든 헤더 허용
    credentials: true, // 필요한 경우 쿠키 포함 요청 허용 (옵션)
  });
  await app.listen(process.env.PORT ?? 5500);
}
bootstrap();
