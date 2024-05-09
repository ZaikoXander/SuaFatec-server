interface PhotoSourceOptions {
  institutionId?: number
  courseId?: number
}

export class Photo {
  private _id: number
  private _url: string
  private _institutionId: number | undefined
  private _courseId: number | undefined

  constructor(
    id: number,
    url: string,
    { institutionId, courseId }: PhotoSourceOptions,
  ) {
    this._id = id
    this._url = url
    this._institutionId = institutionId
    this._courseId = courseId
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

  public get courseId(): number | undefined {
    return this._courseId
  }
}
