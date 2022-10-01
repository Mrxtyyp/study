type ToUnion<T> = T extends any[] ? T[number] : T


type Res = Without<[1, 2], 1> // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]> // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]> // expected to be []


type Case = number | number[]
function hello(n: Case) {
    console.log(n);
}
hello(123)