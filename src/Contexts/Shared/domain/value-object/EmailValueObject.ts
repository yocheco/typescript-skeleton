import { EmailInvalid } from './EmailInvalid'
import { StringValueObject } from './StringValueObject'
import * as EmailValidator from 'email-validator'

export class EmailValueObject extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureValidEmail(value)
  }

  private ensureValidEmail (value: string): void {
    if (!EmailValidator.validate(value)) {
      throw new EmailInvalid(`The Email <${value}> no is valid`)
    }
  }
}
