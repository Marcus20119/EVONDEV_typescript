function total(a: number, b: number): number;
function total(a: string, b: string): string;
function total(a: any, b: any) {
  return a + b;
}

total(5, 7); // 12
total('a', 'b'); // ab

interface Coordinate {
  x: number;
  y: number;
}
// {x: number, y: number}: Coordinate
function parseCoordinate(obj: Coordinate): Coordinate;
// x: number, y: number
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: any, arg2: any): Coordinate {
  let coord = {
    x: arg1,
    y: arg2,
  };
  return coord;
}
