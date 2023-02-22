import { ApiProperty } from '@nestjs/swagger';

export class TagCreateDto {
  @ApiProperty({ example: 'name of tags', description: 'наименование тега' })
  name: string;
}
