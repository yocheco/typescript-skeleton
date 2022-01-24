import { Uuid } from '../../../Shared/domain/value-object/Uuid'

export class User {
    readonly id: Uuid
    readonly name: string
    readonly email: string
    readonly password: string

    constructor ({ id, name, email, password }:{id: Uuid, name: string, email: string, password: string }) {
      this.id = id
      this.name = name
      this.email = email
      this.password = password
    }
}
