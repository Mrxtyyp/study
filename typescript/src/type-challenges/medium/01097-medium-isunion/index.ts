// union 类型会自动的 “解构” 

type IsUnion<T, U = T> = 
    [T] extends [never] ? false : 
        T extends U ? [U] extends [T] ? false : true : false