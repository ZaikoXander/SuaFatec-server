import type { CourseOffering } from '../courseOffering'
import type { Content } from './content'
import type { StudentName } from './studentName'

export class Comment {
  private _id: number
  private _courseOffering: CourseOffering
  private _studentName: StudentName
  private _content: Content
  private _quantityLikes: number
  private _conclusionDate: string
  private _approved: boolean

  constructor(
    id: number,
    courseOffering: CourseOffering,
    studentName: StudentName,
    content: Content,
    quantityLikes: number,
    conclusionDate: string,
    approved: boolean,
  ) {
    this._id = id
    this._courseOffering = courseOffering
    this._studentName = studentName
    this._content = content
    this._quantityLikes = quantityLikes
    this._conclusionDate = conclusionDate
    this._approved = approved
  }

  public get id(): number {
    return this._id
  }

  public get courseOffering(): CourseOffering {
    return this._courseOffering
  }

  public get studentName(): StudentName {
    return this._studentName
  }

  public get content(): Content {
    return this._content
  }

  public get quantityLikes(): number {
    return this._quantityLikes
  }

  public get conclusionDate(): string {
    return this._conclusionDate
  }

  public get approved(): boolean {
    return this._approved
  }
}
