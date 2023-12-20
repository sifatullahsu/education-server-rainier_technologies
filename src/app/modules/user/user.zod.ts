import { z } from 'zod'

const register = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required.'
    }),
    email: z.string({
      required_error: 'email is required.'
    }),
    password: z.string({
      required_error: 'password is required.'
    })
  })
})

const login = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required.'
    }),
    password: z.string({
      required_error: 'password is required.'
    })
  })
})

export const UserZod = {
  register,
  login
}
