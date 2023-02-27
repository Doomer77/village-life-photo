import { ApiProperty } from '@nestjs/swagger'

export class UserAddRoleDto {
  @ApiProperty({ example: 'admin', description: 'Value of role' })
  value: string
  @ApiProperty({ example: '2', description: 'id of user' })
  userId: number
}
