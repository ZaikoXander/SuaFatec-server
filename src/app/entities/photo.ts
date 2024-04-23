import type { Institution } from './institution'

export class Photo {
  private _id: number
  private _url: string
  private _institution: Institution

  constructor(id: number, url: string, institution: Institution) {
    this._id = id
    this._url = url
    this._institution = institution
  }

  public get id(): number {
    return this._id
  }

  public get url(): string {
    return this._url
  }

  public get institution(): Institution {
    return this._institution
  }
}
