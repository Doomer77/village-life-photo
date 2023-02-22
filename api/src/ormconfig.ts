import { SequelizeModule } from '@nestjs/sequelize/dist';
import { TagsModel } from '@app/tags/tag.model';
import { config } from '../database/config';

export const sequelize: SequelizeModule = {
  dialect: 'postgres',
  ...config,
  models: [TagsModel],
  autoLoadModels: true,
};
