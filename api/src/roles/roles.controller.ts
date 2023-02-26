import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { RoleCreateDto } from './dto/role.create.dto'
import { RolesService } from './roles.service'

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  async createRole(@Body() roleCreateDto: RoleCreateDto) {
    return await this.rolesService.createRole(roleCreateDto)
  }

  @Get('/:value')
  async getRoleByValue(@Param('value') value: string) {
    return await this.rolesService.getRoleByValue(value)
  }
}
