import { Elysia } from "elysia";
import { jwt } from "@elysiajs/jwt";
import { ApiKeyService } from "./service";
import { ApiKeyModel } from "./models";

export const app = new Elysia({ prefix: "api-keys" })

//.use and .resolve -basically verifying the jwt  
.use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET!
    })
)

.resolve(async ({ cookie: { auth }, status, jwt }) => {
    if (!auth?.value) return status(401);

    const decoded = await jwt.verify(auth.value as string);

    if (!decoded || !decoded.userId) return status(401);

    return {
      userId: decoded.userId
    };
})

.post("/", async ({userId, body}) => {
    const {apiKey, id} = await ApiKeyService.createApiKey(body.name, Number(userId))
    return {
      id,
      apiKey
    }
},{
    body: ApiKeyModel.createApiKeySchema,
    response:{
      200: ApiKeyModel.createApiKeyResponse
    }
})

.get("/", async ({ userId }) => {
    const apiKeys = await ApiKeyService.getApiKeys(Number(userId))
    return {
        apiKeys: apiKeys
    }
},{
    response: { 200: ApiKeyModel.getApiKeysResponseSchema }
})

.put("/disable", async ({body, userId, status}) => {
    try{
        await ApiKeyService.updateApiKeyDisabled(Number(body.id), Number(userId), body.disable)
        return {
            message: "Updated api key successfully"
        }
    }catch(e){
        return status(400, {
            message: "Updating api key unsuccessful"
        })
    }
},{
    body: ApiKeyModel.updateApiKeySchema,
    response: { 
        200: ApiKeyModel.updateApiKeyResponseSchema,
        400: ApiKeyModel.disableApiKeyResponseFailedSchema
    }
})

.delete("/:id", async ({params: {id}, userId, status}) => {
    try{
        await ApiKeyService.delete(Number(id), Number(userId))
        return {
            message: "Deleted api key successfully"
        }
    }catch(e){
        return status(400,{
            message: "Api key deletion unsuccessful"
        })
    }    
},{
    response:{
        200: ApiKeyModel.deleteApiKeyResponseSchema,
        400: ApiKeyModel.deleteApiKeyResponseFailedSchema
    }
});