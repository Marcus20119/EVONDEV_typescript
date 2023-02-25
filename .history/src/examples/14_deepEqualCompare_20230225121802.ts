// Có thể sử dụng generic type và conditional type để hạn chế được các type truyền vào
function deepEqualCompare<T>(
  a: T extends any[] ? "don't pass an array here" : T,
  b: T extends any[] ? "don't pass an array here" : T
): boolean {
  return a === b;
}

deepEqualCompare(true, true);
deepEqualCompare('evondev', 'evondev');
deepEqualCompare(90, 90);
