import { Request, Router, Response } from 'express'
import container from '../dependency-injection/index'
import StatusGetController from '../controllers/StatusGetController'

export const register = (router: Router) => {
  const controller: StatusGetController = container.get('Apps.api.backend.controllers.StatusGetController')
  router.get('/status', (req: Request, res: Response) => controller.run(req, res))
}
