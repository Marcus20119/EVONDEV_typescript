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

// Rest parameters
export const funcHaveRestParams = (id: number, ...names: string[]): string => {
  return `${id} ${names.join(' ')}`;
};
funcHaveRestParams(1, 'Marcus', 'Lena');

// Callback function
export const funcHaveCallback = (text: string, callback: () => void): void => {
  console.log(text);
};

// Function params with params
export const funcHaveParamsWithPrams = (
  numbers: number[],
  filter: (n: number) => number
): number[] => {
  return numbers.map(item => filter(item));
};

// Function as type
type FilterType = (n: number) => number;
export const funcAsType = (numbers: number[], filter: FilterType): number[] => {
  return numbers.map(item => filter(item));
};

// Function return function
export const FuncReturnFunc = (val: number): ((n: number) => number) => {
  return (n: number) => n * val;
};
