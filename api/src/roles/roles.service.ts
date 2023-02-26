import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { RoleCreateDto } from './dto/role.create.dto'
import { RoleModel } from './role.model'

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(RoleModel) private roleRepository: typeof RoleModel,
  ) {}

  async createRole(roleCreateDto: RoleCreateDto): Promise<RoleModel> {
    const role = await this.roleRepository.create(roleCreateDto)
    return role
  }

  async getRoleByValue(value: string): Promise<RoleModel> {
    const role = await this.roleRepository.findOne({ where: { value } })
    return role
  }
}
