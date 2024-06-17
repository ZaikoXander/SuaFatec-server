export class Photo {
  private _id: number
  private _url: string
  private _institutionId: number | undefined | null

  constructor(
    id: number,
    url: string,
    institutionId: number | undefined | null,
  ) {
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

  public get institutionId(): number | undefined | null {
    return this._institutionId
  }
}
