type IsTuple<T> = 
    [T] extends [never] ? false : 
        T extends ([unknown] | readonly [unknown] | []) ? true : false