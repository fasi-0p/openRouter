import { t } from "elysia";

export namespace AuthModel {
  export const signinSchema = t.Object({
    email: t.String(),
    password: t.String()
  });

  export type SignInSchema = typeof signinSchema.static;

  export const signinResponseSchema = t.Object({
    token: t.String()
  });

  export type SigninResponseSchema = typeof signinResponseSchema.static;

  export const signupSchema = t.Object({
    email: t.String(),
    password: t.String()
  });

  export type SignupSchema = typeof signupSchema.static;

  export const signupResponseSchema = t.Object({
    id: t.String()
  });

  export type SignupResponseSchema = typeof signupResponseSchema.static;

  export const signinFailureResponseSchema = t.Object({
    message: t.Literal("Invalid credentials")
  });

  export const signupFailedResponseSchema = t.Object({
    message: t.Literal("Error while signing up")
  });

  export type SignupFailedResponseSchema =
    typeof signupFailedResponseSchema.static;
}