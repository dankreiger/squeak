type TEntry<T> = { [K in keyof T]: [K, T[K]] };
export type TEntries<T> = TEntry<T>[keyof T];
