import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';
const PORT = process.env.PORT ?? 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => log('http://localhost:' + PORT));
}
bootstrap();
