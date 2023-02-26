import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserCreateDto } from './dto/user.create.dto'
import { UserModel } from './user.model'
import { UsersService } from './users.service'

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
  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return await this.usersService.getAllUsers()
  }

  @ApiOperation({ summary: 'Method to get one user' })
  @ApiResponse({ status: 200, type: UserModel })
  @Get(':id')
  async getOneUser(@Param('id') id: number): Promise<UserModel> {
    return await this.usersService.getOneUser(id)
  }
}
