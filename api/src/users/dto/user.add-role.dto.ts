import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class UserAddRoleDto {
  @ApiProperty({ example: 'admin', description: 'Value of role' })
  @IsString({ message: 'Поле должно быть строкой!' })
  value: string
  @ApiProperty({ example: '2', description: 'id of user' })
  @IsNumber({}, { message: 'Поле должно быть числом!' })
  userId: number
}
