import { Request, Router, Response } from 'express'
import StatusGetController from '../controllers/StatusGetController'

export const register = (router: Router) => {
  const controller = new StatusGetController()
  router.get('/status', (req: Request, res: Response) => controller.run(req, res))
}
