import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelize } from './ormconfig';
import { TagModule } from '@app/tags/tag.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TagModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot(sequelize),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
