type AllCombinations<S extends string> = UnionToCombination<StringToUnion<S>>


type UnionToCombination<U extends string, Item extends string = U> = [U] extends [never]
  ? '' 
  : Item extends Item
  ? `${Item | ''}${UnionToCombination<Exclude<U, Item>>}`
  : never