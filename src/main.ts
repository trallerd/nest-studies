import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'view'));
  hbs.registerPartials(join(__dirname, '..', 'view/layouts'));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'view/layouts'));
  app.setViewEngine('hbs');
  await app.listen(3000);  
}
bootstrap();
