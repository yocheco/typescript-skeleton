import { UserCreator } from '../../../../../src/Contexts/Api/Users/application/UserCreator'
import { User } from '../../../../../src/Contexts/Api/Users/domain/User'
import { UserRepository } from '../../../../../src/Contexts/Api/Users/domain/UserRepository'

describe('UserCreator', () => {
  it('should create a valid user', async () => {
    const repository: UserRepository = {
      save: jest.fn()

    }

    const creator = new UserCreator(repository)
    const id = 'id'
    const name = 'Sergio'
    const email = 'sergio@demo.com'
    const password = '123456'

    const expectedUser = new User(id, name, email, password)

    await creator.run(id, name, email, password)

    expect(repository.save).toHaveBeenCalledWith(expectedUser)
  })
})
