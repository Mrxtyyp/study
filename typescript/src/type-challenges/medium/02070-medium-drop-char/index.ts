type DropChar<T extends string, K extends string> = 
    T extends `${infer First}${K}${infer Other}` ? 
        DropChar<`${First}${Other}`, K>
    : T