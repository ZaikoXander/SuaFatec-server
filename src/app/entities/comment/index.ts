import type { Content } from './content'
import type { StudentName } from './studentName'

export class Comment {
  private _id: number
  private _courseOfferingId: number
  private _studentName: StudentName
  private _content: Content
  private _quantityLikes: number
  private _conclusionDate: Date
  private _approved: boolean

  constructor(
    id: number,
    courseOfferingId: number,
    studentName: StudentName,
    content: Content,
    quantityLikes: number,
    conclusionDate: Date,
    approved: boolean,
  ) {
    this._id = id
    this._courseOfferingId = courseOfferingId
    this._studentName = studentName
    this._content = content
    this._quantityLikes = quantityLikes
    this._conclusionDate = conclusionDate
    this._approved = approved
  }

  public get id(): number {
    return this._id
  }

  public get courseOfferingId(): number {
    return this._courseOfferingId
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

  public get conclusionDate(): Date {
    return this._conclusionDate
  }

  public get approved(): boolean {
    return this._approved
  }
}
