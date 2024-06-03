import { Admin } from '@app/entities/admin'

export class AdminViewModel {
  static toHTTP(admin: Admin) {
    return {
      id: admin.id,
      name: admin.name,
    }
  }
}
