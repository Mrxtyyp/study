type Merge<T extends object, K extends object> = {
    [P in keyof T | keyof K]: P extends keyof K ? K[P] : P extends keyof T ? T[P] : never
}