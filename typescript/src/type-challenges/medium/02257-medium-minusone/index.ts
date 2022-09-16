type MinusOne<T extends number, Arr extends unknown[] = []> = [
    ...Arr,
    ''
]['length'] extends T ? Arr['length'] : MinusOne<T, [...Arr, '']>