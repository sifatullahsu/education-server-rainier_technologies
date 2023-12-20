import { z } from 'zod'

const createData = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required.' }),
    description: z.string({ required_error: 'description is required.' }),
    price: z.string({ required_error: 'price is required.' }),
    duration: z.string({ required_error: 'duration is required.' }),
    level: z.string({ required_error: 'level is required.' }),
    topics: z.array(z.string({ required_error: 'topics is required.' })),
    schedule: z.object({
      startDate: z.string({ required_error: 'startDate is required.' }),
      endDate: z.string({ required_error: 'endDate is required.' }),
      classDays: z.array(z.string({ required_error: 'classDays is required.' })),
      classTime: z.string({ required_error: 'classTime is required.' })
    })
  })
})

const updateData = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.string().optional(),
    duration: z.string().optional(),
    level: z.string().optional(),
    topics: z.array(z.string()).optional(),
    schedule: z
      .object({
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        classDays: z.array(z.string()).optional(),
        classTime: z.string().optional()
      })
      .optional()
  })
})

export const CourseZod = {
  createData,
  updateData
}
