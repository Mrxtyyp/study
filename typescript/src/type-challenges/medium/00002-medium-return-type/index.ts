type MyReturnType<T extends Function> = T extends (...arg: any) => infer A ? A : never