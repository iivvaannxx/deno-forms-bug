import { z } from 'https://deno.land/x/zod@v3.21.4/mod.ts'

export const FooSchema = z.object({

    bar: z.string().min(2).max(6)
})

export type Foo = z.infer<typeof FooSchema>
