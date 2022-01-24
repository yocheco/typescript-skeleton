import { UserId } from '../../Shared/domain/Users/value-object/UserId'

export class User {
    readonly id: UserId
    readonly name: string
    readonly email: string
    readonly password: string

    constructor ({ id, name, email, password }:{id: UserId, name: string, email: string, password: string }) {
      this.id = id
      this.name = name
      this.email = email
      this.password = password
    }
}
