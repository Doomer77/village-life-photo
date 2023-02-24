import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { TagsModule } from './tags/tags.module';
import { TagModel } from './tags/tag.model';
import { UserModel } from './users/user.model';

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
      models: [TagModel, UserModel],
      autoLoadModels: true,
    }),
    UsersModule,
    TagsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
