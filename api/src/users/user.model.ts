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
  UpdatedAt,
} from 'sequelize-typescript';
import { UserCreateDto } from './dto/user.create.dto';

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, UserCreateDto> {
  @ApiProperty({ example: 4, description: 'уникальный id' })
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  id: number;

  @ApiProperty({ example: 'exemple@mail.com', description: 'email of users' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @ApiProperty({ example: 'exemple12345', description: 'password of users' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
