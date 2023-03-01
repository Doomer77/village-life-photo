import {
  Table,
  Model,
  Column,
  AutoIncrement,
  PrimaryKey,
  AllowNull,
} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { DataTypes } from 'sequelize'

@Table({ tableName: 'tags' })
export class TagModel extends Model<TagModel> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор тега' })
  @AutoIncrement
  @PrimaryKey
  @AllowNull(false)
  @Column({ type: DataTypes.INTEGER, unique: true })
  id: number

  @ApiProperty({ example: 'Коты', description: 'Описание значения тега' })
  @AllowNull(false)
  @Column({ type: DataTypes.STRING, unique: true })
  name: string
}
