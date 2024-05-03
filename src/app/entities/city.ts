export class City {
  private _id: number
  private _name: string

  constructor(id: number, name: string) {
    this._id = id
    this._name = name
  }

  public get id(): number {
    return this._id
  }

  public get name(): string {
    return this._name
  }
}
