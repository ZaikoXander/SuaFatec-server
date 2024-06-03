export class Admin {
  private _name: string
  private _password: string
  private _id: number | undefined

  constructor(name: string, password: string, id?: number) {
    this._name = name
    this._password = password
    this._id = id
  }

  public get name(): string {
    return this._name
  }

  public get password(): string {
    return this._password
  }

  public get id(): number | undefined {
    return this._id
  }
}
