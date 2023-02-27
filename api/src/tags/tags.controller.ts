import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { TagCreateDto } from './dto/tag.create.dto'
import { TagsService } from './tags.service'
import { TagModel } from './tag.model'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist'

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}
  @ApiOperation({ summary: 'create tag' })
  @ApiResponse({ status: 200, type: TagModel })
  @Post()
  async createTag(@Body() tagCreateDto: TagCreateDto): Promise<TagModel> {
    return await this.tagsService.createTag(tagCreateDto)
  }

  @ApiOperation({ summary: 'get one tag' })
  @ApiResponse({ status: 200, type: TagModel })
  @Get(':id')
  async getTagOne(@Param('id') id: number): Promise<TagModel> {
    return await this.tagsService.getTagOne(id)
  }

  @ApiOperation({ summary: 'get all tags' })
  @ApiResponse({ status: 200, type: [TagModel] })
  @Get()
  async getAllTags(): Promise<TagModel[]> {
    return await this.tagsService.getAll()
  }
}
