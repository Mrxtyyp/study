type Flip<T extends Record<string, any>> = 
{
    [P in keyof T as T[P] extends keyof any | boolean | null | undefined ? `${T[P]}` : never]: P
}