import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { UserModel } from 'src/users/user.model'
import { RoleModel } from './role.model'

@Table({ tableName: 'users_roles', createdAt: false, updatedAt: false })
export class UserRoleModel extends Model<UserRoleModel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ForeignKey(() => RoleModel)
  @Column({ type: DataType.INTEGER })
  roleId: number

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId: number
}
