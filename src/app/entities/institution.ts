export class Institution {
  private _id: number
  private _name: string
  private _address: string
  private _description: string[]
  private _phoneNumber: string
  private _cityId: number
  private _latitudeCoordinate: number
  private _longitudeCoordinate: number

  constructor(
    id: number,
    name: string,
    address: string,
    description: string[],
    phoneNumber: string,
    cityId: number,
    latitudeCoordinate: number,
    longitudeCoordinate: number,
  ) {
    this._id = id
    this._name = name
    this._address = address
    this._description = description
    this._phoneNumber = phoneNumber
    this._cityId = cityId
    this._latitudeCoordinate = latitudeCoordinate
    this._longitudeCoordinate = longitudeCoordinate
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

  public get description(): string[] {
    return this._description
  }

  public get phoneNumber(): string {
    return this._phoneNumber
  }

  public get cityId(): number {
    return this._cityId
  }

  public get latitudeCoordinate(): number {
    return this._latitudeCoordinate
  }

  public get longitudeCoordinate(): number {
    return this._longitudeCoordinate
  }
}
