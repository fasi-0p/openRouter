import { Messages } from "../types";
import { BaseLlm } from "./Base";

export type LlmResponse = {
    completions: {
        choices: {
            message: {
                content: string
            }   
        }[]
    },
    inputTokensConsumed: number,
    outputTokensConsumed: number
}

export class Claude extends BaseLlm{
    static async chat(model: string, messages: Messages): Promise<LlmResponse> {
        throw new Error("Not implemented chat function")
    }
}