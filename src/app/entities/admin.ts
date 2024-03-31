export class Admin {
  private _id: number
  private _name: string
  private _password: string

  constructor(id: number, name: string, password: string) {
    this._id = id
    this._name = name
    this._password = password
  }

  public get id(): number {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public get password(): string {
    return this._password
  }
}
