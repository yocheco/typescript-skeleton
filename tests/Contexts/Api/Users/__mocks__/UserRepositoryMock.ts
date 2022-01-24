import { User } from '../../../../../src/Contexts/Api/Users/domain/User'
import { UserRepository } from '../../../../../src/Contexts/Api/Users/domain/repositories/UserRepository'

export class UserRepositoryMock implements UserRepository {
  private saveMock: jest.Mock

  constructor () {
    this.saveMock = jest.fn()
  }

  save (user: User): Promise<void> {
    return this.saveMock(user)
  }

  assertSaveHaveBeenCalledWith (expected: User): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected)
  }
}
