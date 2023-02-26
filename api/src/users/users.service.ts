import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { RolesService } from 'src/roles/roles.service'
import { UserCreateDto } from './dto/user.create.dto'
import { UserModel } from './user.model'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
    private rolesService: RolesService,
  ) {}
  async createUser(userCreateDto: UserCreateDto): Promise<UserModel> {
    const user = await this.userRepository.create(userCreateDto)
    const role = await this.rolesService.getRoleByValue('user')
    await user.$set('roles', [role.id])
    return user
  }

  async getAllUsers(): Promise<UserModel[]> {
    const users = await this.userRepository.findAll({ include: { all: true } })
    return users
  }

  async getOneUser(id: number): Promise<UserModel> {
    const users = await this.userRepository.findOne({ where: { id } })
    return users
  }
}
