import { User } from '../../../../../../src/Contexts/Api/Users/domain/User'
import { UserEmail } from '../../../../../../src/Contexts/Api/Users/domain/value-objects/UserEmail'
import { UserName } from '../../../../../../src/Contexts/Api/Users/domain/value-objects/UserName'
import { UserPassword } from '../../../../../../src/Contexts/Api/Users/domain/value-objects/UserPassword'
import { FileUserRepository } from '../../../../../../src/Contexts/Api/Users/infrastructure/persistence/FileUserRepository'
import { Uuid } from '../../../../../../src/Contexts/Shared/domain/value-object/Uuid'
describe('FileUserRepository', () => {
  it('should save a user in file', async () => {
    const expectedUser = new User({
      id: new Uuid('f3b750a5-3cc7-49a8-9645-fc3c3d832191'),
      name: new UserName('name'),
      email: new UserEmail('sergio@email.com'),
      password: new UserPassword('password')
    })

    const repository = new FileUserRepository()

    await repository.save(expectedUser)

    const user = await repository.search('f3b750a5-3cc7-49a8-9645-fc3c3d832191')
    expect(user).toEqual(expectedUser)
  })
})
