import { Uuid } from '../../../Shared/domain/value-object/Uuid'
import { User } from '../domain/User'
import { UserRepository } from '../domain/UserRepository'
import { UserName } from '../domain/value-objects/UserName'
import { UserCreatorRequest } from './UserCreatorRequest'
import { UserEmail } from '../domain/value-objects/UserEmail'
import { UserPassword } from '../domain/value-objects/UserPassword'
export class UserCreator {
  private readonly repository: UserRepository
  constructor (repository: UserRepository) {
    this.repository = repository
  }

  async run (request: UserCreatorRequest) {
    const user = new User({
      id: new Uuid(request.id),
      name: new UserName(request.name),
      email: new UserEmail(request.email),
      password: new UserPassword(request.password)
    })

    return this.repository.save(user)
  }
}
