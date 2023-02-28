import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class RoleCreateDto {
  @ApiProperty({ example: 'Role of user', description: 'Admin' })
  @IsString({ message: 'Поле должно быть строкой!' })
  value: string

  @ApiProperty({ example: 'Admin role', description: 'Gives admin rights' })
  description: string
}
