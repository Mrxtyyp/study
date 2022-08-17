// 对于联合类型，是如何进行类比的？
// type Fruits = "apple" | "banana" | 'peach' | 'orange';
// type DislikeFruits = "apple" | "banana";
// type FloveFruits = Exclude<Fruits, DislikeFruits> // 等效于 type FloveFruits = "peach" | "orange"

// // 实际上 Exclude 进行的比较
// type FloveFruits =
//   | ("apple" extends "apple" | "banana" ? never : "apple")
//   | ("banana" extends "apple" | "banana" ? never : "banana")
//   | ("peach" extends "apple" | "banana" ? never : "peach")
//   | ("orange" extends "apple" | "banana" ? never : "orange")
// // 所以最后的结果
// type FloveFruits = "peach" | "orange"


type MyExclude<T, U> = T extends U ? never : T