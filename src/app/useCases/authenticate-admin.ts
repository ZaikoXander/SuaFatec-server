import { Injectable } from '@nestjs/common'
import { AdminsRepository } from '@app/repositories/admins-repository'
import { Admin } from '@app/entities/admin'
import { JwtService } from '@nestjs/jwt'

interface AuthenticateAdminRequest {
  name: string
  password: string
}

interface AuthenticateAdminResponse {
  admin: Admin
  token: string
}

@Injectable()
export class AuthenticateAdmin {
  constructor(
    private adminsRepository: AdminsRepository,
    private jwtService: JwtService,
  ) {}

  async execute({
    name,
    password,
  }: AuthenticateAdminRequest): Promise<AuthenticateAdminResponse> {
    const admin = new Admin(name, password)

    const adminFound = await this.adminsRepository.find(admin)

    if (!adminFound) {
      throw new Error('Admin not found')
    }

    const token = await this.jwtService.signAsync({ adminId: adminFound.id })

    return { admin: adminFound, token }
  }
}
