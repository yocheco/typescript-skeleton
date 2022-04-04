import { Request, Router, Response } from 'express'
import container from '../dependency-injection/index'

export const register = (router: Router) => {
  const controller = container.get('Apps.auth.controllers.status.StatusGetController')
  router.get('/status', (req: Request, res: Response) => controller.run(req, res))
}
