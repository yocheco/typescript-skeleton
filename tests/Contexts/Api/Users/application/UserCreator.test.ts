import { UserCreator } from '../../../../../src/Contexts/Api/Users/application/UserCreator'
import { User } from '../../../../../src/Contexts/Api/Users/domain/User'
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock'

describe('UserCreator', () => {
  let repository: UserRepositoryMock

  beforeEach(() => {
    repository = new UserRepositoryMock()
  })

  it('should create a valid user', async () => {
    const creator = new UserCreator(repository)
    const id = 'id'
    const name = 'Sergio'
    const email = 'sergio@demo.com'
    const password = '123456'

    const expectedUser = new User(id, name, email, password)

    await creator.run(id, name, email, password)

    repository.assertSaveHaveBeenCalledWith(expectedUser)
  })
})
