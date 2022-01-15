import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'

export class UserCreator {
  private readonly repository: UserRepository

  constructor (repository: UserRepository) {
    this.repository = repository
  }

  async run (id: string, name: string, email: string, password: string) {
    const user = new User(id, name, email, password)

    return this.repository.save(user)
  }
}
