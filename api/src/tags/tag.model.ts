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

@Table({ tableName: 'tags' })
export class TagsModel extends Model {
  @ApiProperty({ example: 4, description: 'уникальный id' })
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column({ type: DataType.INTEGER, allowNull: false })
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
