// type PercentageParser<T extends string> = 
//     T extends `${infer L}${infer C}${infer R}` ? 
//         L extends '+'|'-' ? 
//             R extends '%' ? 
//                 [L,C,R]
//                 : [L, `${C}${R}`, '']
//             : R extends '%' ? 
//                 ['', `${L}${C}`, R]
//                 : ['', `${L}${C}${R}`, '']
//     : never

type PercentageString<T> = T extends `${infer M}%` ? [M, '%'] : [T, '']

type PercentageParser<T extends string> = 
    T extends `+${infer C}` ? ['+', ...PercentageString<C>] : 
        T extends `-${infer C}` ? ['-', ...PercentageString<C>] : ['', ...PercentageString<T>]