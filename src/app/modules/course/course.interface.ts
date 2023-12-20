import { Model } from 'mongoose'

export type iCourse = {
  name: string
  description: string
  price: string
  duration: string
  level: string
  topics: string[]
  schedule: {
    startDate: string
    endDate: string
    classDays: string[]
    classTime: string
  }
}

export type iCourseModel = Model<iCourse>
