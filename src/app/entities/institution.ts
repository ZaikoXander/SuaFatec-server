export class Institution {
  private _id: number
  private _name: string
  private _address: string
  private _cityId: number

  constructor(id: number, name: string, address: string, cityId: number) {
    this._id = id
    this._name = name
    this._address = address
    this._cityId = cityId
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

  public get cityId(): number {
    return this._cityId
  }
}
