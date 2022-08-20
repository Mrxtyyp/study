type Chainable<Result = {}> = {
    option<Key extends string, Value>(key: Key, value: Value): Chainable<
        {
            [K in keyof Result | Key]: K extends Key ? Value : K extends keyof Result ? Result[K] : never
        }
    >
    get(): Result
  }