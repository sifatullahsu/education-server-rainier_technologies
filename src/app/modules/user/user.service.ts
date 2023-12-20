/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status'
import config from '../../../config'
import ApiError from '../../../error/ApiError'
import { iAuth, iLoginReqData, iMeta, iPagination, iReturnWithMeta } from '../../../global/interface'
import { createToken } from '../../../shared'
import { iUser } from './user.interface'
import { User } from './user.model'

const register = async (data: iUser): Promise<Partial<iUser>> => {
  const result = await User.create(data)
  const { password, ...restData } = result.toObject()

  return restData
}

const login = async (data: iLoginReqData): Promise<iAuth | null> => {
  const { email, password } = data

  // email verification
  const result = await User.findOne({ email }, '+password')
  if (!result) throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access.')

  // password verification
  const isPasswordValid = await User.checkPassword(password, result.password)
  if (!isPasswordValid) throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access.')

  const { password: removePassword, ...userinfo } = result.toObject()

  // generate tokens
  const tokenData = { _id: userinfo._id, role: userinfo.role }
  const accessToken = createToken(tokenData, config.jwt.secret!, config.jwt.expiresIn!)

  return {
    ...userinfo,
    accessToken
  }
}

const getAllData = async (data: iPagination): Promise<iReturnWithMeta<iUser[]>> => {
  const { page, limit, skip, sort } = data
  const result = await User.find({}, '', { limit, skip, sort })
  const count = await User.countDocuments({})

  const meta: iMeta = { page, limit, count }

  return { meta, result }
}

export const UserService = {
  register,
  login,
  getAllData
}
