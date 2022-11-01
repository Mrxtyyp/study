

type MapTypes<T extends Record<string, unknown>, R extends {mapFrom: unknown,mapTo: unknown}> = 
    {
        [P in keyof T]: T[P] extends R['mapFrom'] ? R['mapTo'] : T[P]
    }