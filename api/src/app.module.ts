import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelize } from './ormconfig';
import { TagModule } from '@app/tags/tag.module';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TagModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot(sequelize),
    RolesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
