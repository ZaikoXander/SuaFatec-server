import { Admin } from './admin'

describe(Admin, () => {
  describe('#constructor', () =>
    it('instantiates', () =>
      expect(new Admin(1, 'Gabriel', 'c24r386bt9')).toBeInstanceOf(Admin)))

  const admin = new Admin(1, 'Gabriel', 'c24r386bt9')

  describe('#id', () => it('returns id', () => expect(admin.id).toBe(1)))

  describe('#name', () =>
    it('returns name', () => expect(admin.name).toBe('Gabriel')))

  describe('#password', () =>
    it('returns password', () => expect(admin.password).toBe('c24r386bt9')))
})
