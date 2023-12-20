import { Schema, model } from 'mongoose'
import { iCourse, iCourseModel } from './course.interface'

const courseSchema = new Schema<iCourse, iCourseModel>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    duration: { type: String, required: true, trim: true },
    level: { type: String, required: true, trim: true },
    topics: [{ type: String, required: true, trim: true }],
    schedule: {
      startDate: { type: String, required: true, trim: true },
      endDate: { type: String, required: true, trim: true },
      classDays: [{ type: String, required: true, trim: true }],
      classTime: { type: String, required: true, trim: true }
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const Course = model<iCourse, iCourseModel>('Course', courseSchema)
