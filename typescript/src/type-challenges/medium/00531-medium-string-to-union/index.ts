type StringToUnion<T extends string> = 
    T extends `${infer A}${infer O}` ?
            A | StringToUnion<O>
        : never

        