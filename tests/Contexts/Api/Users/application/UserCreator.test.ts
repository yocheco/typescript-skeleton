import { UserCreator } from '../../../../../src/Contexts/Api/Users/application/UserCreator'
import { User } from '../../../../../src/Contexts/Api/Users/domain/User'
import { UserEmail } from '../../../../../src/Contexts/Api/Users/domain/value-objects/UserEmail'
import { UserName } from '../../../../../src/Contexts/Api/Users/domain/value-objects/UserName'
import { UserNameLengthExceeded } from '../../../../../src/Contexts/Api/Users/domain/value-objects/UserNameLengthExceeded'
import { UserPassword } from '../../../../../src/Contexts/Api/Users/domain/value-objects/UserPassword'
import { EmailInvalid } from '../../../../../src/Contexts/Shared/domain/value-object/EmailInvalid'
import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid'
import { UserRepositoryMock } from '../__mocks__/UserRepositoryMock'
// import { EmailInvalid } from '../../../../../src/Contexts/Shared/domain/value-object/EmailInvalid'

describe('UserCreator', () => {
  let repository: UserRepositoryMock

  beforeEach(() => {
    repository = new UserRepositoryMock()
  })

  it('should create a valid user', async () => {
    const creator = new UserCreator(repository)
    const id = '453ad15d-c666-4e3a-8e2e-61c84a65a271'
    const name = 'Sergio'
    const email = 'sergio@demo.com'
    const password = '123456'

    const expectedUser = new User({
      id: new Uuid(id),
      name: new UserName(name),
      email: new UserEmail(email),
      password: new UserPassword(password)
    })

    await creator.run({ id, name, email, password })

    repository.assertSaveHaveBeenCalledWith(expectedUser)
  })

  it('should throw error if user name length is exceeded', async () => {
    const creator = new UserCreator(repository)
    const id = '453ad15d-c666-4e3a-8e2e-61c84a65a271'
    const name = 'Sergio'.repeat(90)
    const email = 'sergio@demo.com'
    const password = '123456'

    expect(() => {
      const user = new User({
        id: new Uuid(id),
        name: new UserName(name),
        email: new UserEmail(email),
        password: new UserPassword(password)
      })

      creator.run({ id, name, email, password })

      repository.assertSaveHaveBeenCalledWith(user)
    }).toThrow(UserNameLengthExceeded)
  })

  it('should throw error if user email is invalid', async () => {
    const creator = new UserCreator(repository)
    const id = '453ad15d-c666-4e3a-8e2e-61c84a65a271'
    const name = 'Sergio'
    const email = 'sergio@.co'
    const password = '123456'

    expect(() => {
      const user = new User({
        id: new Uuid(id),
        name: new UserName(name),
        email: new UserEmail(email),
        password: new UserPassword(password)
      })

      creator.run({ id, name, email, password })

      repository.assertSaveHaveBeenCalledWith(user)
    }).toThrow(EmailInvalid)
  })
})
