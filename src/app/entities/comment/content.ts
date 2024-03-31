const CONTENT_VALUE_MIN_LENGTH = 5
const CONTENT_VALUE_MAX_LENGTH = 280

export class Content {
  private _value: string

  private validateValueLength(value: string): void {
    if (value.length < CONTENT_VALUE_MIN_LENGTH)
      throw new Error('Content is too short')
    if (value.length > CONTENT_VALUE_MAX_LENGTH)
      throw new Error('Content is too long')
  }

  constructor(value: string) {
    this.validateValueLength(value)
    this._value = value
  }

  public get value(): string {
    return this._value
  }
}
