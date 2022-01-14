import { Request, Router, Response } from 'express'
import UsersPutController from '../controllers/UsersPutController'
import container from '../dependency-injection/index'

export const register = (router: Router) => {
  const controller: UsersPutController = container.get('Apps.api.backend.controllers.UsersPutController')
  router.put('/users/:id', (req: Request, res: Response) => controller.run(req, res))
}
