export class Course {
  private _id: number
  private _name: string
  private _duration: number

  constructor(id: number, name: string, duration: number) {
    this._id = id
    this._name = name
    this._duration = duration
  }

  public get id(): number {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public get duration(): number {
    return this._duration
  }
}
