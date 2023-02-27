import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { RoleCreateDto } from './dto/role.create.dto'
import { RolesService } from './roles.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserModel } from '../users/user.model'

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Role creation method' })
  @ApiResponse({ status: 200, type: UserModel })
  @Post()
  async createRole(@Body() roleCreateDto: RoleCreateDto) {
    return await this.rolesService.createRole(roleCreateDto)
  }

  @ApiOperation({ summary: 'Get role by value' })
  @ApiResponse({ status: 200, type: UserModel })
  @Get('/:value')
  async getRoleByValue(@Param('value') value: string) {
    return await this.rolesService.getRoleByValue(value)
  }
}
