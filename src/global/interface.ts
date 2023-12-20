/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from 'mongoose'

export type iId = Types.ObjectId

export type iRole = 'admin'

export type iMeta = {
  page: number
  limit: number
  count: number
}

export type iReturnWithMeta<T> = {
  meta: iMeta
  result: T
}

export type iAuth = {
  _id: iId
  name: string
  email: string
  role: string
  accessToken: string
}

export type iLoginReqData = {
  email: string
  password: string
}

export type iReceviedQuery = Record<string, any>

export type iPagination = {
  page: number
  limit: number
  skip: number
  sort: string
}
