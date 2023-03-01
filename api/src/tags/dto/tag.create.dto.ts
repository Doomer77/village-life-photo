import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class TagCreateDto {
  @ApiProperty({ example: 'Коты', description: 'Тег Коты' })
  @IsString({ message: 'Должно быть строкой' })
  readonly name: string
}
