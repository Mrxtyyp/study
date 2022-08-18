// K extends keyof T = keyof T  指定未传K的时候给默认值为keyof T

type MyReadonly2<T, K extends keyof T = keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P]
} & {
    readonly [P in K]: T[P]
}