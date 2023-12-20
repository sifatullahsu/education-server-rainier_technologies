import { iMeta, iPagination, iReturnWithMeta } from '../../../global/interface'
import { iCourse } from './course.interface'
import { Course } from './course.model'

const createData = async (data: iCourse): Promise<iCourse> => {
  const result = await Course.create(data)

  return result
}

const getAllData = async (data: iPagination): Promise<iReturnWithMeta<iCourse[]>> => {
  const { page, limit, skip, sort } = data
  const result = await Course.find({}, '', { limit, skip, sort })
  const count = await Course.countDocuments({})

  const meta: iMeta = { page, limit, count }

  return { meta, result }
}

const getData = async (id: string): Promise<iCourse | null> => {
  const result = await Course.findOne({ _id: id })

  return result
}

const updateData = async (id: string, data: Partial<iCourse>): Promise<iCourse | null> => {
  const result = await Course.findOneAndUpdate({ _id: id }, data, {
    runValidators: true,
    new: true
  })

  return result
}

const deleteData = async (id: string): Promise<iCourse | null> => {
  const result = await Course.findOneAndDelete({ _id: id })

  return result
}

export const CourseService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
