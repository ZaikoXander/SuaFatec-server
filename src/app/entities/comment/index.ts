import type { Content } from './content'
import type { StudentName } from './studentName'

interface OptionalProps {
  approved?: boolean
  quantityLikes?: number
  id?: number
}

export class Comment {
  private _courseOfferingId: number
  private _studentName: StudentName
  private _content: Content
  private _conclusionDate: Date
  private _approved: boolean
  private _quantityLikes: number
  private _id: number | undefined

  constructor(
    courseOfferingId: number,
    studentName: StudentName,
    content: Content,
    conclusionDate: Date,
    optionalProps: OptionalProps = { approved: false, quantityLikes: 0 },
  ) {
    this._courseOfferingId = courseOfferingId
    this._studentName = studentName
    this._content = content
    this._conclusionDate = conclusionDate

    const { approved, quantityLikes, id } = optionalProps

    this._approved = approved
    this._quantityLikes = quantityLikes
    this._id = id
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

  public get conclusionDate(): Date {
    return this._conclusionDate
  }

  public get approved(): boolean {
    return this._approved
  }

  public get quantityLikes(): number {
    return this._quantityLikes
  }

  public like(): void {
    this._quantityLikes += 1
  }

  public dislike(): void {
    if (this._quantityLikes <= 0) {
      throw new Error('Comment has no likes')
    }

    this._quantityLikes -= 1
  }

  public get id(): number | undefined {
    return this._id
  }
}
