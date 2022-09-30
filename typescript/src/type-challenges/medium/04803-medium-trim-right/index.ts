type TrimRight<S extends string> = 
    S extends `${infer L}${' ' | '\r' | '\n' | '\t'}` ? 
        TrimRight<L>
    : S