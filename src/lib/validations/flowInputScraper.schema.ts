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

    refreshSearch: z.object({
        poolPage: z.string({ required_error: 'Pool of page to refresh is required' }).min(1, "At least a Number is required").optional(),
        poolCards: z.string({ required_error: 'Pool of cards to refresh is required' }).min(1, "At least a Number is required").optional(),
        perTimeRange: z.string({ required_error: 'Time range to scrape is required' }).min(1).max(10000).optional(),
    })
    .optional(),

    message: z.boolean({ required_error: 'Message is required'}).optional(),
    messageWebSite: z.boolean({ required_error: 'Message is required'}).optional()
})


export type FlowInputScraper = z.infer<typeof FlowInputSchema>;