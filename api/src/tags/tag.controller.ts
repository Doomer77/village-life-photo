import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTagDto } from '@app/tags/dto/create-tag-dto';
import { TagService } from '@app/tags/tag.service';
import { TagsModel } from './tag.model';

@Controller('tags')
export class TagController {
  constructor(private tagsSerice: TagService) {}
  @Post()
  async createTag(@Body() tagDto: CreateTagDto): Promise<TagsModel> {
    return await this.tagsSerice.createTag(tagDto);
  }

  @Get(':id')
  async getTagOne(@Param('id') id: number): Promise<TagsModel> {
    return await this.tagsSerice.getTagOne(id);
  }

  @Get()
  async getAllTags(): Promise<TagsModel[]> {
    return await this.tagsSerice.getAll();
  }
}
