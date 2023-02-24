import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'email of user', description: 'xxx@mail.com' })
  email: string;

  @ApiProperty({ example: 'password of user', description: '12345' })
  password: string;
}
