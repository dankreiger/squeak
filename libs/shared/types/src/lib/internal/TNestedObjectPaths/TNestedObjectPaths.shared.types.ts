/* eslint-disable @typescript-eslint/ban-types */
type TJoin<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type TPrev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

type TPaths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | TJoin<K, TPaths<T[K], TPrev[D]>>
        : never;
    }[keyof T]
  : '';

// TODO: evaluate how expensive this becomes on the compiler
export type TNestedObjectPaths<T> = TPaths<T>;
