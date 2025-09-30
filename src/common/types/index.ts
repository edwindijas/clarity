export type DeepString<T> = T extends object
  ? { [K in keyof T]: DeepString<T[K]> }
  : string;
