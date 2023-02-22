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
  @PrimaryKey
  @AutoIncrement
  @Unique
  @Column({ type: DataType.INTEGER, allowNull: false })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
