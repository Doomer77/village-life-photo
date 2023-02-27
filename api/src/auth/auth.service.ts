import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { UserCreateDto } from '../users/dto/user.create.dto'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcryptjs'
import { UserModel } from '../users/user.model'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userCreateDto: UserCreateDto): Promise<{ token: string }> {
    const user = await this.validateUser(userCreateDto)
    return this.generateJwtToken(user)
  }

  async registration(userCreateDto: UserCreateDto): Promise<{ token: string }> {
    const candidate = await this.usersService.getUserByEmail(
      userCreateDto.email,
    )
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email существует!',
        HttpStatus.BAD_REQUEST,
      )
    }
    const hashPassword = await bcrypt.hash(userCreateDto.password, 5)
    const user = await this.usersService.createUser({
      ...userCreateDto,
      password: hashPassword,
    })
    return this.generateJwtToken(user)
  }

  private async generateJwtToken(user: UserModel): Promise<{ token: string }> {
    const payload = { id: user.id, email: user.email, roles: user.roles }
    return { token: this.jwtService.sign(payload) }
  }

  private async validateUser(userCreateDto: UserCreateDto): Promise<UserModel> {
    const user = await this.usersService.getUserByEmail(userCreateDto.email)
    const passwordEquals = await bcrypt.compare(
      userCreateDto.password,
      user.password,
    )
    if (user && passwordEquals) {
      return user
    }
    throw new UnauthorizedException({ message: 'Не верный пароль или почта!' })
  }
}
