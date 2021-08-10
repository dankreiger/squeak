import { deepFreeze } from './deep-freeze.frontend.shared.test-utils';
describe('deepFreeze', () => {
  const object = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
      },
      f: {
        g: {
          h: 4,
        },
      },
      i: {
        j: {
          k: {
            l: 5,
          },
        },
      },
    },
  };
  test('cannot mutate object deep properties', () => {
    object.b.f.g.h = 5;
    expect(object.b.f.g.h).toBe(5);

    deepFreeze(object);
    expect(object.b.f.g.h).toBe(5);

    expect(() => (object.b.f.g.h = 7)).toThrow(
      "Cannot assign to read only property 'h' of object '#<Object>'"
    );
  });
});
