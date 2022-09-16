type PickByType<T extends object, U> = {
    [K in keyof T as U extends T[K] ? K : never]: T[K]
}