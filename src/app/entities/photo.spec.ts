import { Institution } from './institution'
import { Photo } from './photo'

describe(Photo, () => {
  const institution = new Institution(
    1,
    'Fatec de Praia Grande',
    'Praça 19 de Janeiro, 144 - Boqueirão, Praia Grande - SP, 11700-100',
    1,
  )

  describe('#constructor', () =>
    it('instantiates', () =>
      expect(
        new Photo(1, 'https://www.fatecpg.edu.br/img/fatec.png', institution),
      ).toBeInstanceOf(Photo)))

  const photo = new Photo(
    1,
    'https://www.fatecpg.edu.br/img/fatec.png',
    institution,
  )

  describe('#id', () => it('returns id', () => expect(photo.id).toBe(1)))

  describe('#url', () =>
    it('returns url', () =>
      expect(photo.url).toBe('https://www.fatecpg.edu.br/img/fatec.png')))

  describe('#institution', () =>
    it('returns institution', () =>
      expect(photo.institution).toBe(institution)))
})
