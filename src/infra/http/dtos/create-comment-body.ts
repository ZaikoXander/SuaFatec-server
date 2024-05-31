import { IsDate, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'

export class CreateCommentBody {
  @IsNotEmpty()
  @IsNumber()
  courseOfferingId: number

  @IsNotEmpty()
  @IsString()
  @Length(2, 64)
  studentName: string

  @IsNotEmpty()
  @IsString()
  @Length(5, 280)
  content: string

  @IsNotEmpty()
  @IsDate()
  conclusionDate: Date
}
