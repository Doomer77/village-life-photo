import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { UserModel } from './user.model'
import { SequelizeModule } from '@nestjs/sequelize'
import { RoleModel } from 'src/roles/role.model'
import { UserRoleModel } from 'src/roles/user-role.model'
import { RolesModule } from 'src/roles/roles.module'

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel, RoleModel, UserRoleModel]),
    RolesModule,
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
