import { Request, Response } from 'express'
import { Controller } from './Controller'
import { UserCreator } from '../../../../Contexts/Api/Users/application/UserCreator'
import httpStatus from 'http-status'

export default class UsersPutController implements Controller {
  private readonly userCreator: UserCreator

  constructor (userCreator: UserCreator) {
    this.userCreator = userCreator
  }

  async run (req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body
    const { id } = req.params
    await this.userCreator.run({ id, name, email, password })
    res.status(httpStatus.CREATED).send()
  }
}
