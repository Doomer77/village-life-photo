import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TagCreateDto } from '@app/tags/dto/tag.create.dto';
import { TagsModel } from '@app/tags/tag.model';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(TagsModel) private tagsRepository: typeof TagsModel,
  ) {}

  async createTag(tagDto: TagCreateDto): Promise<TagsModel> {
    const tag = await this.tagsRepository.create({
      name: tagDto.name,
    });
    return tag;
  }

  async getTagOne(id: number) {
    const tag = await this.tagsRepository.findOne({ where: { id } });
    return tag;
  }

  async getAll(): Promise<TagsModel[]> {
    const tags = await this.tagsRepository.findAll();
    return tags;
  }
}
