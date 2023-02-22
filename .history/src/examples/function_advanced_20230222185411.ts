// Normal function
export function normalFunc(a: number, b: number): number {
  return a + b;
}

// Arrow function
export const arrowFunc = (a: number, b: number): number => {
  return a + b;
};

// Default parameter
export const funcHaveDefaultParams = (a: number = 2, b: number = 3): number => {
  return a + b;
};
