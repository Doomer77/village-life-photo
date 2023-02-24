import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserCreateDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.update.dto';
import { UserModel } from './user.model';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'create user' })
  @ApiResponse({ status: 200, type: UserModel })
  @Post()
  async createTag(@Body() userCreateDto: UserCreateDto): Promise<UserModel> {
    return await this.usersService.createUser(userCreateDto);
  }

  @ApiOperation({ summary: 'delete user' })
  @ApiResponse({ status: 200, type: UserModel })
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<number> {
    return await this.usersService.deleteUser(id);
  }

  @ApiOperation({ summary: 'update tag' })
  @ApiResponse({ status: 200, type: UserModel })
  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() data: UpdateUserDto,
  ): Promise<[number, UserModel[]]> {
    return await this.usersService.updateUser(id, data);
  }

  @ApiOperation({ summary: 'get one user' })
  @ApiResponse({ status: 200, type: UserModel })
  @Get(':id')
  async getOneUser(@Param('id') id: number): Promise<UserModel> {
    return await this.usersService.getOneUser(id);
  }

  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({ status: 200, type: [UserModel] })
  @Get()
  async getAllTags(): Promise<UserModel[]> {
    return await this.usersService.getAllUsers();
  }
}
