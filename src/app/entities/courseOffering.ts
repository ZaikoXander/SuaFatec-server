export type Shift = 'morning' | 'afternoon' | 'night'

export class CourseOffering {
  private _id: number
  private _courseId: number
  private _institutionId: number
  private _shifts: Shift[]
  private _distanceLearning: boolean

  constructor(
    id: number,
    courseId: number,
    institutionId: number,
    shifts: Shift[],
    distanceLearning: boolean,
  ) {
    this._id = id
    this._courseId = courseId
    this._institutionId = institutionId
    this._shifts = shifts
    this._distanceLearning = distanceLearning
  }

  public get id(): number {
    return this._id
  }

  public get courseId(): number {
    return this._courseId
  }

  public get institutionId(): number {
    return this._institutionId
  }

  public get shifts(): Shift[] {
    return this._shifts
  }

  public get distanceLearning(): boolean {
    return this._distanceLearning
  }
}
