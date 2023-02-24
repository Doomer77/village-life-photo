import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TagModel } from './tag.model';
import { TagService } from './tags.service';
import { TagController } from './tags.controller';

@Module({
  imports: [SequelizeModule.forFeature([TagModel])],
  providers: [TagService],
  controllers: [TagController],
})
export class TagsModule {}
