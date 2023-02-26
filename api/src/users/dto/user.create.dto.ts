import { ApiProperty } from '@nestjs/swagger'

export class UserCreateDto {
  @ApiProperty({ example: 'Email of user', description: 'xxx@mail.com' })
  email: string

  @ApiProperty({ example: 'Password of user', description: '12345' })
  password: string
}
