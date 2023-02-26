import { ApiProperty } from '@nestjs/swagger'

export class RoleCreateDto {
  @ApiProperty({ example: 'Role of user', description: 'Admin' })
  value: string

  @ApiProperty({ example: 'Admin role', description: 'Gives admin rights' })
  description: string
}
