type RequiredByKeys<T extends object, K = any> = MergeObject<{
    [P in keyof T]: T[P]
} & {
    [P in keyof T as P extends K ? P : never]-?: T[P]
}>