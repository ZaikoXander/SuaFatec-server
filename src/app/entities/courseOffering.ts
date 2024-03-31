import type { Comment } from './comment'
import type { Course } from './course'
import type { Institution } from './institution'

export type Shift = 'morning' | 'afternoon' | 'night'

export class CourseOffering {
  private _id: number
  private _course: Course
  private _institution: Institution
  private _shifts: Shift[]
  private _comments: Comment[]
  private _distanceLearning: boolean

  constructor(
    id: number,
    course: Course,
    institution: Institution,
    shifts: Shift[],
    comments: Comment[],
    distanceLearning: boolean,
  ) {
    this._id = id
    this._course = course
    this._institution = institution
    this._shifts = shifts
    this._comments = comments
    this._distanceLearning = distanceLearning
  }

  public get id(): number {
    return this._id
  }

  public get course(): Course {
    return this._course
  }

  public get institution(): Institution {
    return this._institution
  }

  public get shifts(): Shift[] {
    return this._shifts
  }

  public get comments(): Comment[] {
    return this._comments
  }

  public get distanceLearning(): boolean {
    return this._distanceLearning
  }
}
