import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserCreateDto } from './dto/user.create.dto'
import { UserModel } from './user.model'
import { UsersService } from './users.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { Roles } from '../auth/auth-roles.decorator'
import { RoleGuard } from '../auth/role.guard'
import { UserAddRoleDto } from './dto/user.add-role.dto'
import { UserBunDto } from './dto/user.bun.dto'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'User creation method' })
  @ApiResponse({ status: 200, type: UserModel })
  @Post()
  async createUser(@Body() userCreateDto: UserCreateDto): Promise<UserModel> {
    return await this.usersService.createUser(userCreateDto)
  }

  @ApiOperation({ summary: 'Method to get all users' })
  @ApiResponse({ status: 200, type: UserModel })
  // @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RoleGuard)
  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return await this.usersService.getAllUsers()
  }

  @ApiOperation({ summary: 'Role assignment method' })
  @ApiResponse({ status: 200, type: UserModel })
  // @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RoleGuard)
  @Post('/role')
  async addRole(
    @Body() userAddRoleDto: UserAddRoleDto,
  ): Promise<UserAddRoleDto> {
    return await this.usersService.addRole(userAddRoleDto)
  }

  @ApiOperation({ summary: 'User banned method' })
  @ApiResponse({ status: 200, type: UserModel })
  // @UseGuards(JwtAuthGuard)
  @Roles('admin')
  @UseGuards(RoleGuard)
  @Post('/ban')
  async banUser(@Body() userBunDto: UserBunDto): Promise<UserModel> {
    return await this.usersService.banUser(userBunDto)
  }

  @ApiOperation({ summary: 'Method to get one user' })
  @ApiResponse({ status: 200, type: UserModel })
  @Get(':id')
  async getOneUser(@Param('id') id: number): Promise<UserModel> {
    return await this.usersService.getOneUser(id)
  }
}
