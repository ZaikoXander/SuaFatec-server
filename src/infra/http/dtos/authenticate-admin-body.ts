import { IsNotEmpty, IsString, Length } from 'class-validator'

export class AuthenticateAdminBody {
  @IsNotEmpty()
  @IsString()
  @Length(2, 64)
  name: string

  @IsNotEmpty()
  @IsString()
  @Length(2, 64)
  password: string
}
