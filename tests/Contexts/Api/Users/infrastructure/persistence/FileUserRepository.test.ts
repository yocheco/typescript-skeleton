import { User } from '../../../../../../src/Contexts/Api/Users/domain/User'
import { FileUserRepository } from '../../../../../../src/Contexts/Api/Users/infrastructure/persistence/FileUserRepository'
describe('FileUserRepository', () => {
  it('should save a user in file', async () => {
    const expectedUser = new User('id', 'name', 'email', 'password')
    const repository = new FileUserRepository()

    await repository.save(expectedUser)

    const user = await repository.search('id')
    expect(user).toEqual(expectedUser)
  })
})
