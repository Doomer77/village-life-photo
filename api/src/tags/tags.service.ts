import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { TagCreateDto } from './dto/tag.create.dto'
import { TagModel } from './tag.model'

@Injectable()
export class TagsService {
  constructor(@InjectModel(TagModel) private tagsRepository: typeof TagModel) {}
  async createTag(tagCreateDto: TagCreateDto): Promise<TagModel> {
    const tag = await this.tagsRepository.create(tagCreateDto)
    return tag
  }

  async getAllTags(): Promise<TagModel[]> {
    const tags = await this.tagsRepository.findAll()
    return tags
  }

  async getOneTag(id: number): Promise<TagModel> {
    const tag = await this.tagsRepository.findOne({ where: { id } })
    return tag
  }

  async removeTag(id: number): Promise<number> {
    const tag = await this.tagsRepository.destroy({ where: { id } })
    return tag
  }
}
