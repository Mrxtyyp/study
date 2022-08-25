declare function PromiseAll<T extends any[]>(
    values: readonly [...T]
  ): Promise<{[key in keyof T] : T[key] extends Promise<any> ? Awaited<T[key]> : T[key] }>;



// type Await<T> = T extends [infer P, ...infer U] ? P extends Promise<infer K> ? [K, ...Await<U>] : [P, ...Await<U>] : []

// declare function PromiseAll<T extends readonly any[]>(values: readonly [...T]): Promise<[...Await<T>]>