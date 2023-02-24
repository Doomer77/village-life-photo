import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserCreateDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.update.dto';
import { UserModel } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private usersRepository: typeof UserModel,
  ) {}

  async createUser(createUseruDto: UserCreateDto): Promise<UserModel> {
    const user = await this.usersRepository.create(createUseruDto);
    return user;
  }

  async deleteUser(id: number): Promise<number> {
    const user = await this.usersRepository.destroy({ where: { id } });
    return user;
  }

  async updateUser(
    id: number,
    data: UpdateUserDto,
  ): Promise<[number, UserModel[]]> {
    const user = await this.usersRepository.update(data, {
      where: { id },
      returning: true,
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return user;
  }

  async getOneUser(id: number): Promise<UserModel> {
    const users = await this.usersRepository.findOne({ where: { id } });
    return users;
  }

  async getAllUsers(): Promise<UserModel[]> {
    const users = await this.usersRepository.findAll();
    return users;
  }
}
