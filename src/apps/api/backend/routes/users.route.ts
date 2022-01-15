import { Request, Router, Response } from 'express'
import { body, param } from 'express-validator'
import UsersPutController from '../controllers/UsersPutController'
import container from '../dependency-injection/index'
import { validateReqSchema } from './index'

export const register = (router: Router) => {
  const reqSchema = [
    param('id')
      .exists().withMessage('requiered')
      .isUUID().withMessage('requiered uuid'),
    body('name')
      .exists().withMessage('requiered')
      .notEmpty().withMessage('no empty')
      .isString().withMessage('requiered string'),
    body('email')
      .exists().withMessage('requiered')
      .isEmail().withMessage('requiered a valid email'),
    body('password')
      .exists().withMessage('requiered')
      .isString().withMessage('requiered string')
  ]

  const controller: UsersPutController = container.get('Apps.api.backend.controllers.UsersPutController')
  router.put('/users/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => controller.run(req, res))
}
