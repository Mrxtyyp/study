type NullString = ' ' | '\n' | '\t'

type Trim_Left<T extends string> = T extends `${NullString}${infer Rest}` ? Trim_Left<Rest> : T
type Trim_Right<T extends string> = T extends `${infer Rest}${NullString}` ? Trim_Right<Rest> : T

type Trim<T extends string> = Trim_Left<Trim_Right<T>>