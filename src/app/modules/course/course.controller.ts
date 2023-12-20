import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { apiResponse, catchAsync, queryPagination } from '../../../shared'
import { iCourse } from './course.interface'
import { CourseService as service } from './course.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse<iCourse>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'The course has been added successfully',
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const pagination = queryPagination(req.query)
  const { result, meta } = await service.getAllData(pagination)

  apiResponse<iCourse[]>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Courses fetched successfull.',
    data: result,
    meta
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse<iCourse>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Course fetched successfull.',
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse<iCourse>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Course updated successfull.',
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse<iCourse>(res, {
    success: true,
    status: httpStatus.OK,
    message: 'Course deleted successfull.',
    data: result
  })
})

export const CourseController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
