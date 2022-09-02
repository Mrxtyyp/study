type SplitString<
  S extends string,
  SplitStr extends string = "",
  T extends string[] = []
> = S extends `${infer Char}${SplitStr}${infer Rest}`
  ? SplitString<Rest, SplitStr, [...T, Char]>
  : S extends string
  ? S extends ""
    ? T
    : [...T, S]
  : never

type LengthOfString<T extends string> = SplitString<T>['length']