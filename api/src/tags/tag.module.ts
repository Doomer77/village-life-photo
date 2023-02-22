import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TagsModel } from '@app/tags/tag.model';
import { TagService } from '@app/tags/tag.service';
import { TagController } from '@app/tags/tag.controller';

@Module({
  imports: [SequelizeModule.forFeature([TagsModel])],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}
