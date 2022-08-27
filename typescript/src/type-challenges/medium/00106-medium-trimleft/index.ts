type TrimLeft<T extends string> = T extends `${infer First}${infer Other}` ? 
First extends ' ' | '\n' | '\t' ? TrimLeft<Other> : T
: ''