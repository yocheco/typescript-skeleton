import { Request, Response } from 'express'
import { Controller } from './Controller'
import { UserCreator } from '../../../../Contexts/Api/Users/application/UserCreator'
import httpStatus from 'http-status'

export default class UsersPutController implements Controller {
  constructor (private userCreator: UserCreator) {}

  async run (req: Request, res: Response): Promise<void> {
    const { name, email, passwor } = req.body
    const { id } = req.params

    await this.userCreator.run(id, name, email, passwor)

    res.status(httpStatus.CREATED).send()
  }
}
