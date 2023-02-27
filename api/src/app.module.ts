import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserModel } from './users/user.model'
import { UsersModule } from './users/users.module'
import { RolesModule } from './roles/roles.module'
import { RoleModel } from './roles/role.model'
import { UserRoleModel } from './roles/user-role.model'
import { AuthModule } from './auth/auth.module'
import { TagsModule } from './tags/tags.module'
import { TagModel } from './tags/tag.model'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [UserModel, RoleModel, UserRoleModel, TagModel],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    TagsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
