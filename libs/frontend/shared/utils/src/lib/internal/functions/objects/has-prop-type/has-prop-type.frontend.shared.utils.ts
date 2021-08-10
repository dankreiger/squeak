import { F, has, ifElse, propEq } from 'ramda';

export const hasPropType =
  <T>(propName: string, propValue: T) =>
  (obj: Record<string, T>) =>
    ifElse(has(propName), propEq(propName, propValue), F)(obj);
