import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { TagCreateDto } from './dto/tag.create.dto'
import { TagModel } from './tag.model'
import { TagsService } from './tags.service'

@ApiTags('Теги')
@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @ApiOperation({ summary: 'Метод создания тега' })
  @ApiResponse({ status: 200, type: TagModel })
  @Post()
  createTag(@Body() tagCreateDto: TagCreateDto): Promise<TagModel> {
    return this.tagsService.createTag(tagCreateDto)
  }

  @ApiOperation({ summary: 'Метод получения тега' })
  @ApiResponse({ status: 200, type: TagModel })
  @Get(':id')
  getOneTag(@Param('id') id: number): Promise<TagModel> {
    return this.tagsService.getOneTag(id)
  }

  @ApiOperation({ summary: 'Метод получения тегов' })
  @ApiResponse({ status: 200, type: TagModel })
  @Get()
  async getAllTags(): Promise<TagModel[]> {
    return await this.tagsService.getAllTags()
  }

  @ApiOperation({ summary: 'Метод удаления тега' })
  @ApiResponse({ status: 200, type: TagModel })
  @Delete(':id')
  removeTag(@Param('id') id: number): Promise<number> {
    return this.tagsService.removeTag(id)
  }
}
