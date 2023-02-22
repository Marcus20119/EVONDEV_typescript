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
// {x: number, y:number}: Coordinate
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}
// x: number, y: number
function parseCoordinateFromObject(x: number, y: number): Coordinate {
  return {
    x,
    y,
  };
}
