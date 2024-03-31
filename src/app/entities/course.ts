import type { CourseOffering } from './courseOffering'

export class Course {
  private _id: number
  private _name: string
  private _duration: number
  private _courseOfferings: CourseOffering[]

  constructor(
    id: number,
    name: string,
    duration: number,
    courseOfferings: CourseOffering[],
  ) {
    this._id = id
    this._name = name
    this._duration = duration
    this._courseOfferings = courseOfferings
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

  public get courseOfferings(): CourseOffering[] {
    return this._courseOfferings
  }
}
