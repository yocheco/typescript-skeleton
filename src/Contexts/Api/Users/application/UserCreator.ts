import { Uuid } from '../../../Shared/domain/value-object/Uuid'
import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import { UserCreatorRequest } from './UserCreatorRequest'
export class UserCreator {
  private readonly repository: UserRepository
  constructor (repository: UserRepository) {
    this.repository = repository
  }

  async run (request: UserCreatorRequest) {
    const user = new User({ id: new Uuid(request.id), name: request.name, email: request.email, password: request.password })

    return this.repository.save(user)
  }
}
