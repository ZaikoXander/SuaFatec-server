export class Course {
  private _id: number
  private _name: string
  private _duration: number
  private _description: string
  private _photoId: number | undefined

  constructor(
    id: number,
    name: string,
    duration: number,
    description: string,
    photoId: number | undefined,
  ) {
    this._id = id
    this._name = name
    this._duration = duration
    this._description = description
    this._photoId = photoId
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

  public get description(): string {
    return this._description
  }

  public get photoId(): number | undefined {
    return this._photoId
  }
}
