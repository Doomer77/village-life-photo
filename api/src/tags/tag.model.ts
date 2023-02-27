import { ApiProperty } from '@nestjs/swagger'
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'
import { TagCreateDto } from './dto/tag.create.dto'

@Table({ tableName: 'tags' })
export class TagModel extends Model<TagModel, TagCreateDto> {
  @ApiProperty({ example: 4, description: 'Уникальный id' })
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  id: number

  @ApiProperty({ example: 'Цветы', description: 'Tag of flowers' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string
}
