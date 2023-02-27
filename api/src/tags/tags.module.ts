import { Module } from '@nestjs/common'
import { TagsService } from './tags.service'
import { TagsController } from './tags.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { TagModel } from './tag.model'

@Module({
  providers: [TagsService],
  controllers: [TagsController],
  imports: [SequelizeModule.forFeature([TagModel])],
})
export class TagsModule {}
