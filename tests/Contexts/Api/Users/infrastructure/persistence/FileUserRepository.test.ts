import { User } from '../../../../../../src/Contexts/Api/Users/domain/User'
import { FileUserRepository } from '../../../../../../src/Contexts/Api/Users/infrastructure/persistence/FileUserRepository'
import { Uuid } from '../../../../../../src/Contexts/Shared/domain/value-object/Uuid'
describe('FileUserRepository', () => {
  it('should save a user in file', async () => {
    const expectedUser = new User(new Uuid('f3b750a5-3cc7-49a8-9645-fc3c3d832191'), 'name', 'email', 'password')
    const repository = new FileUserRepository()

    await repository.save(expectedUser)

    const user = await repository.search('f3b750a5-3cc7-49a8-9645-fc3c3d832191')
    expect(user).toEqual(expectedUser)
  })
})
