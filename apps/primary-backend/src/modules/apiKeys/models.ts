import {t} from 'elysia'

export namespace ApiKeyModel{

    export const createApiKeySchema = t.Object({
        name: t.String()
    })
    export type createApiKeySchema = typeof createApiKeySchema.static;

    ////////////////////////////////////////////////////////////////////

    export const createApiKeyResponse = t.Object({
        id: t.String(),
        apiKey: t.String()
    })
    export type createApiKeyResponse = typeof createApiKeyResponse.static;

    ////////////////////////////////////////////////////////////////////

    export const updateApiKeySchema = t.Object({
        id: t.String(),
        disable: t.Boolean()
    })
    export type updateApiKeySchema = typeof updateApiKeySchema.static;

    ////////////////////////////////////////////////////////////////////

    export const updateApiKeyResponseSchema = t.Object({
        message: t.Literal("Updated api key successfully")
    })
    export type updateApiKeyResponseSchema = typeof updateApiKeyResponseSchema.static;

    ////////////////////////////////////////////////////////////////////

    export const disableApiKeyResponseFailedSchema = t.Object({
        message: t.Literal("Updating api key unsuccessful")
    })
    export type disableApiKeyResponseFailedSchema = typeof disableApiKeyResponseFailedSchema.static;

    ////////////////////////////////////////////////////////////////////

    export const getApiKeysResponseSchema = t.Object({
        apiKeys: t.Array(
            t.Object({
                id: t.String(),
                name: t.String(),
                apiKey: t.String(),
                lastUsed: t.Nullable(t.Date()),
                creditsConsumed: t.Number()
            })
        )
    })
    export type getApiKeysResponseSchema = typeof getApiKeysResponseSchema.static;

    ////////////////////////////////////////////////////////////////////

    export const deleteApiKeyResponseSchema = t.Object({
        message: t.Literal("Deleted api key successfully")
    })
    export type deleteApiKeyResponseSchema = typeof deleteApiKeyResponseSchema.static;

    ////////////////////////////////////////////////////////////////////

    export const deleteApiKeyResponseFailedSchema = t.Object({
        message: t.Literal("Api key deletion unsuccessful")
    })
    export type deleteApiKeyResponseFailedSchema = typeof deleteApiKeyResponseFailedSchema.static;

}