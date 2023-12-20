import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { iAuth } from '../../../global/interface'
import { apiResponse, catchAsync, queryPagination } from '../../../shared'
import { iUser } from './user.interface'
import { UserService as service } from './user.service'

export const register = catchAsync(async (req: Request, res: Response) => {
  const result = await service.register(req.body)

  apiResponse<Partial<iUser>>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'User registered successfull.',
    data: result
  })
})

export const login = catchAsync(async (req: Request, res: Response) => {
  const result = await service.login(req.body)

  apiResponse<iAuth>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Login successfull.',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const pagination = queryPagination(req.query)
  const { result, meta } = await service.getAllData(pagination)

  apiResponse<iUser[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Users fetched successfull.',
    data: result,
    meta
  })
})

export const UserController = {
  register,
  login,
  getAllData
}
