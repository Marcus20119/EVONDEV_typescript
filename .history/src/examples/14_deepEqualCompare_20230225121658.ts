function deepEqualCompare<T>(
  a: T extends any[] ? "don't pass an array here" : T,
  b: T extends any[] ? "don't pass an array here" : T
): boolean {
  return a === b;
}

deepEqualCompare(true, true);
deepEqualCompare('evondev', 'evondev');
deepEqualCompare(90, 90);
