import { ApiProperty } from '@nestjs/swagger'

export class TagCreateDto {
  @ApiProperty({ example: 'Name of tags', description: 'Наименование тега' })
  name: string
}
