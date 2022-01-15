import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import { UserCreatorRequest } from './UserCreatorRequest'
export class UserCreator {
  private readonly repository: UserRepository
  constructor (repository: UserRepository) {
    this.repository = repository
  }

  async run (request: UserCreatorRequest) {
    const user = new User(request.id, request.name, request.email, request.password)

    return this.repository.save(user)
  }
}
