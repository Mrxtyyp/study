// type Absolute<T extends number | string> = 
//     `${T}` extends `${infer First}${infer Other}` ? 
//         First extends number ? 
//             `${First}${Absolute<Other>}` : 
//                 `${Absolute<Other>}`
//     : ''

type Absolute<T extends number | string | bigint> = 
`${T}` extends `-${infer S}` ? S : `${T}`