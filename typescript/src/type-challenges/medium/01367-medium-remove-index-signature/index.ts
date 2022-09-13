type RemoveIndexSignature<T extends object> = {
    [
        key in keyof T as 
            string extends key ? never : 
                number extends key ? never : 
                    symbol extends key ? never : key
    ] : T[key]
}