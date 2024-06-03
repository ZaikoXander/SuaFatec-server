import { Admin } from './admin'

describe(Admin, () => {
  describe('#constructor', () => {
    describe('when admin has id', () => {
      it('instantiates', () => {
        expect(new Admin('Gabriel', 'c24r386bt9', 1)).toBeInstanceOf(Admin)
      })
    })

    describe('when admin has no id', () => {
      it('instantiates', () => {
        expect(new Admin('Gabriel', 'c24r386bt9')).toBeInstanceOf(Admin)
      })
    })
  })

  let admin: Admin
  beforeEach(() => {
    admin = new Admin('Gabriel', 'c24r386bt9', 1)
  })

  describe('#name', () => {
    it('returns name', () => {
      expect(admin.name).toBe('Gabriel')
    })
  })

  describe('#password', () => {
    it('returns password', () => {
      expect(admin.password).toBe('c24r386bt9')
    })
  })

  describe('#id', () => {
    describe('when admin has id', () => {
      it('returns id', () => {
        expect(admin.id).toBe(1)
      })
    })

    describe('when admin has no id', () => {
      it('returns undefined', () => {
        expect(new Admin('Gabriel', 'c24r386bt9').id).toBeUndefined()
      })
    })
  })
})
