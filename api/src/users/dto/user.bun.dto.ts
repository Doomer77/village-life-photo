import { ApiProperty } from '@nestjs/swagger'

export class UserBunDto {
  @ApiProperty({ example: '4', description: 'Id of user' })
  userId: number
  @ApiProperty({ example: 'Мат', description: 'Нецензурно выражался' })
  banReason: string
}
