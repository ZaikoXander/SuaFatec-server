import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common'

import { AuthenticateAdmin } from '@app/useCases/authenticate-admin'
import { AuthenticateAdminBody } from '../dtos/authenticate-admin-body'
import { AdminViewModel } from '../viewModels/admin-view-model'

@Controller('admins')
export class AdminsController {
  constructor(private authenticateAdmin: AuthenticateAdmin) {}

  @Post('auth')
  async authenticate(@Body() body: AuthenticateAdminBody) {
    try {
      const { name, password } = body

      const { admin, token } = await this.authenticateAdmin.execute({
        name,
        password,
      })

      return { admin: AdminViewModel.toHTTP(admin), token }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      )
    }
  }
}
