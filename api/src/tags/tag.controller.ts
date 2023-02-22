import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TagCreateDto } from '@app/tags/dto/tag.create.dto';
import { TagService } from '@app/tags/tag.service';
import { TagsModel } from './tag.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('tags')
@Controller('tags')
export class TagController {
  constructor(private tagsSerice: TagService) {}
  @ApiOperation({ summary: 'create tag' })
  @ApiResponse({ status: 200, type: TagsModel })
  @Post()
  async createTag(@Body() tagDto: TagCreateDto): Promise<TagsModel> {
    return await this.tagsSerice.createTag(tagDto);
  }

  @ApiOperation({ summary: 'get one tag' })
  @ApiResponse({ status: 200, type: TagsModel })
  @Get(':id')
  async getTagOne(@Param('id') id: number): Promise<TagsModel> {
    return await this.tagsSerice.getTagOne(id);
  }

  @ApiOperation({ summary: 'get all tags' })
  @ApiResponse({ status: 200, type: [TagsModel] })
  @Get()
  async getAllTags(): Promise<TagsModel[]> {
    return await this.tagsSerice.getAll();
  }
}
