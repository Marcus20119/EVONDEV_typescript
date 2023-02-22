import { useEffect } from 'react';

// Assertion Type => Tạm thời coi biến như 1 kiểu nào đó để thực hiện những phương thức mà chỉ có kiểu này có
export function parseCoordinate(obj: Coordinate): Coordinate;
export function parseCoordinate(x: number, y: number): Coordinate;
export function parseCoordinate(arg1: any, arg2?: any): Coordinate {
  let coord;
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

// Casting Type => Ép kiểu cho biến, làm thay đổi nó thành 1 type khác
const CastingType = () => {
  useEffect(() => {
    const input = document.querySelector('input') as HTMLInputElement;
    console.log(input.value);
  }, []);
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default CastingType;
