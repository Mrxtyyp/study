// as 可以理解为断言

type MyOmit<T extends Object, K extends keyof T> = {
    [P in keyof T as (P extends K ? never : P)]: T[P]
}