import { Elysia } from "elysia";
import {app as authApp} from './modules/auth'
import {app as apiKeysApp} from './modules/apiKeys'
import {app as modelsApp} from "./modules/models"
import {app as paymentsApp} from "./modules/payments"
import { cors } from "@elysiajs/cors"

export const app = new Elysia()
  .use(cors())
  .use(authApp)
  .use(apiKeysApp)
  .use(modelsApp)
  .use(paymentsApp)
  .listen(3000);
  
export type App=typeof app