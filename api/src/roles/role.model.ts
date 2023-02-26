import { ApiProperty } from '@nestjs/swagger'

import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript'
import { UserModel } from '../users/user.model'
import { RoleCreateDto } from './dto/role.create.dto'
import { UserRoleModel } from './user-role.model'

@Table({ tableName: 'roles' })
export class RoleModel extends Model<RoleModel, RoleCreateDto> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'ADMIN', description: 'Уникальное Значение роли ' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string

  @BelongsToMany(() => UserModel, () => UserRoleModel)
  users: UserModel[]
}
