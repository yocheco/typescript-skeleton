import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { UserNameLengthExceeded } from './UserNameLengthExceeded'

export class UserName extends StringValueObject {
  constructor (value: string) {
    super(value)
    this.ensureLengthIsLessThan30Characters(value)
  }

  private ensureLengthIsLessThan30Characters (value: string): void {
    if (value.length > 90) {
      throw new UserNameLengthExceeded(`The User Name <${value}> has more than 30 characters`)
    }
  }
}
