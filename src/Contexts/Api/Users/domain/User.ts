import { UserId } from '../../Shared/domain/Users/value-object/UserId'
import { UserName } from './value-objects/UserName'
import { UserEmail } from './value-objects/UserEmail'
import { UserPassword } from './value-objects/UserPassword'

export class User {
    readonly id: UserId
    readonly name: UserName
    readonly email: UserEmail
    readonly password: UserPassword

    constructor ({ id, name, email, password }:{id: UserId, name: UserName, email: UserEmail, password: UserPassword }) {
      this.id = id
      this.name = name
      this.email = email
      this.password = password
    }
}
