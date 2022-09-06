// 解法一
type Absolute<T extends number | string | bigint> = 
    `${T}` extends `${infer First}${infer Other}` ? 
        First extends `${number}` ? 
            `${First}${Absolute<Other>}` : 
                `${Absolute<Other>}`
    : ''

// 解法二
// type Absolute<T extends number | string | bigint> = 
// `${T}` extends `-${infer S}` ? S : `${T}`