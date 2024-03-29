type AppendToObject<T extends Object, K extends string, V> = {
    [P in keyof T | K]: P extends keyof T ? T[P] : V
}