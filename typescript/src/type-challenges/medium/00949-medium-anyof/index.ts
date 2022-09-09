type FalseValue = '' | 0 | [] | Record<string, never> | false | null | undefined

type AnyOf<T extends readonly any[]> = T extends Array<FalseValue> ? false : true