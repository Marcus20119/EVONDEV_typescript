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
function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  // Ép xem như kiểu number để đúng với interface
  let coord = {
    x: arg1 as number,
    y: arg2 as number,
  };
  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}
