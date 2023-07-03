import { z } from "zod"

export const FlowInputSchema =  z.object({
    totNumPage: z.string({ required_error: 'Total Number Page is required'})
                .min(1, "At least a Number is required"),
    totNumCards: z.string({ required_error: 'Total Number Cards is required'})
                .min(1, "At least a Number is required"),
    contract: z.string({ required_error: 'At least a contract is Required' }).nonempty({ message: 'Contract is required'}),
    url: z
    .string({ required_error: 'Url is required' })
    .url({ message: "Invalid URL" }),
    username: z.string({ required_error: 'Username is required'})
                .min(1, "Full username is required"),
    password: z.string({ required_error: 'password is required'})
                .min(1, "password is required"),
    message: z.boolean({ required_error: 'Message is required'}).optional(),
    messageWebSite: z.boolean({ required_error: 'Message is required'}).optional()
})
 

export const RefreshSearchSchema = z.object({
            poolPage: z.string({ required_error: 'Pool of page to refresh is required'}),
            poolCards: z.string({ required_error: 'Pool of cards to refresh is required'}),
            perTimeRange: z.number({ required_error: 'Pool of page to refresh is required'}),
})



export type FlowInputScraper = z.infer<typeof FlowInputSchema>;
export type RefreshSearch = z.infer<typeof RefreshSearchSchema>;