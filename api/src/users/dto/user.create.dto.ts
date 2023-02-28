import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, Length } from 'class-validator'

export class UserCreateDto {
  @ApiProperty({ example: 'Email of user', description: 'xxx@mail.com' })
  @IsString({ message: 'Поле должно быть строкой' })
  @IsEmail({}, { message: 'Не корректный email' })
  email: string

  @ApiProperty({ example: 'Password of user', description: '12345' })
  @IsString({ message: 'Поле должно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 и не более 16 символов' })
  password: string
}
