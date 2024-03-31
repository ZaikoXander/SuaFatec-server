import type { City } from './city'
import type { CourseOffering } from './courseOffering'

export class Institution {
  private _id: number
  private _name: string
  private _address: string
  private _city: City
  private _photoUrls: string[]
  private _courseOfferings: CourseOffering[]

  constructor(
    id: number,
    name: string,
    address: string,
    city: City,
    photoUrls: string[],
    courseOfferings: CourseOffering[],
  ) {
    this._id = id
    this._name = name
    this._address = address
    this._city = city
    this._photoUrls = photoUrls
    this._courseOfferings = courseOfferings
  }

  public get id(): number {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public get address(): string {
    return this._address
  }

  public get city(): City {
    return this._city
  }

  public get photoUrls(): string[] {
    return this._photoUrls
  }

  public get courseOfferings(): CourseOffering[] {
    return this._courseOfferings
  }
}
