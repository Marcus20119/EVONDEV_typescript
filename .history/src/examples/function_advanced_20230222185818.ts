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

// Promise function
export const promiseFunc = (url: string): Promise<string> =>
  Promise.resolve(`Get data from ${url}`);

//  Rest parameters
export const funcHaveRestParams = (id: number, ...names: string[]): string => {
  return `${id} ${names.join(' ')}`;
};
