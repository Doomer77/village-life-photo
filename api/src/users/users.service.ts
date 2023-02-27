import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { RolesService } from 'src/roles/roles.service'
import { UserCreateDto } from './dto/user.create.dto'
import { UserModel } from './user.model'
import { UserAddRoleDto } from './dto/user.add-role.dto'
import { UserBunDto } from './dto/user.bun.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
    private rolesService: RolesService,
  ) {}
  async createUser(userCreateDto: UserCreateDto): Promise<UserModel> {
    const user = await this.userRepository.create(userCreateDto)
    const role = await this.rolesService.getRoleByValue('admin')
    await user.$set('roles', [role.id])
    user.roles = [role]
    return user
  }

  async getAllUsers(): Promise<UserModel[]> {
    const users = await this.userRepository.findAll({ include: { all: true } })
    return users
  }

  async getOneUser(id: number): Promise<UserModel> {
    const user = await this.userRepository.findOne({ where: { id } })
    return user
  }

  async getUserByEmail(email: string): Promise<UserModel> {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    })
    return user
  }

  async addRole(userAddRoleDto: UserAddRoleDto): Promise<UserAddRoleDto> {
    const user = await this.userRepository.findByPk(userAddRoleDto.userId)
    const role = await this.rolesService.getRoleByValue(userAddRoleDto.value)
    if (user && role) {
      await user.$add('role', role.id)
      return userAddRoleDto
    }
    throw new HttpException(
      'Роль или пользователь не найдены',
      HttpStatus.NOT_FOUND,
    )
  }

  async banUser(userBunDto: UserBunDto): Promise<UserModel> {
    const user = await this.userRepository.findByPk(userBunDto.userId)
    if (!user) {
      throw new HttpException('Пользователь не найден!', HttpStatus.NOT_FOUND)
    }
    user.banned = true
    user.banReason = userBunDto.banReason
    await user.save()
    return user
  }
}
