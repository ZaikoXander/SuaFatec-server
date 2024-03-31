import type { Institution } from './institution'

export class City {
  private _id: number
  private _name: string
  private _institutions: Institution[]

  constructor(id: number, name: string, institutions: Institution[]) {
    this._id = id
    this._name = name
    this._institutions = institutions
  }

  public get id(): number {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public get institutions(): Institution[] {
    return this._institutions
  }
}
