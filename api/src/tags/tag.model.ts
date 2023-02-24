import { ApiProperty } from '@nestjs/swagger';
import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import { TagCreateDto } from './dto/tag.create.dto';

@Table({ tableName: 'tags' })
export class TagModel extends Model<TagModel, TagCreateDto> {
  @ApiProperty({ example: 4, description: 'уникальный id' })
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  id: number;

  @ApiProperty({ example: 'Цветы', description: 'tag of flowers' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
