export class Photo {
  private _id: number
  private _url: string
  private _institutionId: number | undefined

  constructor(id: number, url: string, institutionId: number | undefined) {
    this._id = id
    this._url = url
    this._institutionId = institutionId
  }

  public get id(): number {
    return this._id
  }

  public get url(): string {
    return this._url
  }

  public get institutionId(): number | undefined {
    return this._institutionId
  }
}
