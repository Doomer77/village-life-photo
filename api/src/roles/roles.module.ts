import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RolesController } from './roles.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { RoleModel } from './role.model'
import { UserModel } from 'src/users/user.model'
import { UserRoleModel } from './user-role.model'

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([RoleModel, UserModel, UserRoleModel])],
  exports: [RolesService],
})
export class RolesModule {}
