import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TagCreateDto } from './dto/tag.create.dto';
import { TagModel } from './tag.model';

@Injectable()
export class TagService {
  constructor(@InjectModel(TagModel) private tagsRepository: typeof TagModel) {}

  async createTag(tagDto: TagCreateDto): Promise<TagModel> {
    const tag = await this.tagsRepository.create(tagDto);
    return tag;
  }

  async getTagOne(id: number): Promise<TagModel> {
    const tag = await this.tagsRepository.findOne({ where: { id } });
    return tag;
  }

  async getAll(): Promise<TagModel[]> {
    const tags = await this.tagsRepository.findAll();
    return tags;
  }
}
