type ObjectEntries<T extends object> = {
  [K in keyof T]-?: [
    K,
    T[K] extends undefined ? undefined : Exclude<T[K], undefined>
  ];
}[keyof T];
