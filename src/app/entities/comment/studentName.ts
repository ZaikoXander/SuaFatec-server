const STUDENT_NAME_VALUE_MIN_LENGTH = 2
const STUDENT_NAME_VALUE_MAX_LENGTH = 64

export class StudentName {
  private _value: string

  private validateValueLength(value: string): void {
    if (value.length < STUDENT_NAME_VALUE_MIN_LENGTH)
      throw new Error('Student name is too short')
    if (value.length > STUDENT_NAME_VALUE_MAX_LENGTH)
      throw new Error('Student name is too long')
  }

  constructor(value: string) {
    this.validateValueLength(value)
    this._value = value
  }

  public get value(): string {
    return this._value
  }
}
