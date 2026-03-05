import { t } from 'elysia'

export namespace AuthModel {
  export const signinSchema = t.Object({
    email: t.String(),
    password: t.String()
  })

  export type signInSchema = typeof signinSchema.static

  export const signinResponseSchema = t.Object({
    token: t.String(),
  })

  export type signinResponseSchema = typeof signinResponseSchema.static

  export const signupSchema = t.Object({
    email: t.String(),
    password: t.String()
  })

  export type signupSchema = typeof signinSchema.static

  export const signupResponseSchema = t.Object({
    id: t.String(),
  })

  export const signinFailureResponseSchema = t.Object({
    message: t.Literal("Invalid credentials")
  })


  export const signupFailedResponseSchema = t.Object({
    message: t.Literal("Error while signing up")
  })

  export type signupResponseSchema = typeof signinResponseSchema.static
  export type signupFailedResponseSchema = typeof signupFailedResponseSchema.static

}