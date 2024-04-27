import { Admin } from '../entities/admin'

export abstract class AdminsRepository {
  abstract find(admin: Admin): Promise<Admin | null>
}
