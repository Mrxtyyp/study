type GreaterThan<T extends number, U extends number, Arr extends 1[] = []> = 
    T extends Arr['length'] ? false : U extends Arr['length'] ? true : GreaterThan<T,U,[...Arr, 1]>