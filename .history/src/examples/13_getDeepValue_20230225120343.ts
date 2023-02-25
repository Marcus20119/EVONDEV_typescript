const obj = {
  foo: {
    a: true,
    b: 20,
  },
  baz: {
    a: false,
    b: 30,
  },
};
// log(obj, 'foo', 'a') => true

function getDeepValue<T, K extends keyof T, M extends keyof T[K]>(
  obj: T,
  firstKey: K,
  secondKey: M
) {
  return obj[firstKey][secondKey];
}
