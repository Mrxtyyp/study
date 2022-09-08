type Diff<O extends object, O1 extends object> = {
    [P in keyof O | keyof O1 as (P extends keyof O ? P extends keyof O1 ? never : P : P extends keyof O1 ? P : never )]: 
        P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never
}