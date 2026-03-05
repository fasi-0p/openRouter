import { Elysia } from "elysia";
import { AuthModel } from "./models";
import { AuthService } from "./service";


export const app = new Elysia({ prefix: "auth" })
  .post("/sign-up", async({ body }) => {
    const userId = await AuthService.signup(body.email, body.password)
    return{
        id: userId
    }
}, {
    body: AuthModel.signupSchema,
    responses:{
        200: AuthModel.signupResponseSchema,
        400: AuthModel.signupFailedResponseSchema
    }
  })
  .post("/sign-in", async({body}) => {
    const token = await AuthService.signin(body.email, body.password)
    return{
        token
    }

  },{
    body: AuthModel.signinSchema,
    response:{
        200: AuthModel.signinResponseSchema,
        403: AuthModel.signinFailureResponseSchema
    }
  });