import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserCreateDto } from '../users/dto/user.create.dto'
import { AuthService } from './auth.service'
import { UserModel } from '../users/user.model'

@ApiTags('authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'User login method' })
  @ApiResponse({ status: 200, type: UserModel })
  @Post('/login')
  async login(
    @Body() userCreateDto: UserCreateDto,
  ): Promise<{ token: string }> {
    return await this.authService.login(userCreateDto)
  }

  @ApiOperation({ summary: 'User registration method' })
  @ApiResponse({ status: 200, type: UserModel })
  @Post('/registration')
  async registration(
    @Body() userCreateDto: UserCreateDto,
  ): Promise<{ token: string }> {
    return await this.authService.registration(userCreateDto)
  }
}
