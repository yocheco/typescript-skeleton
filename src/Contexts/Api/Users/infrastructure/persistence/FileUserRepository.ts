
import { serialize, deserialize } from 'bson'
import fs from 'fs'
import path from 'path'
import { User } from '../../domain/User'
import { UserRepository } from '../../domain/repositories/UserRepository'

export class FileUserRepository implements UserRepository {
  private FILE_PATH = path.join(__dirname, 'user').toString()

  save (user: User): Promise<void> {
    return fs.promises.writeFile(this.filePath(user.id.toString()), serialize(user))
  }

  async search (userId: string): Promise<User> {
    const userData = await fs.promises.readFile(this.filePath(userId))
    const { id, name, email, password } = deserialize(userData)
    return new User({ id: id, name: name, email: email, password: password })
  }

  private filePath (id: string): string {
    return `${this.FILE_PATH}.${id}.ignore`
  }
}
