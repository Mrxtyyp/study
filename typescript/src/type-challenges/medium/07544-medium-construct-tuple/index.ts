type ConstructTuple<L extends number,Arr extends unknown[] = []> = 
    Arr['length'] extends L ? Arr : ConstructTuple<L, [...Arr, unknown]>