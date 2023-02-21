// Tuple
export const tuple: [number, string] = [22, 'Marcus'];

// Enum
export enum EnumExample1 {
  ADMIN, // Permissions.ADMIN = 0
  EDITOR, // Permissions.EDITOR = 1
  MODERATOR, // Permissions.MODERATOR = 2
}

export enum EnumExample2 {
  ADMIN = 5, // Permissions.ADMIN = 5    => Tự động tăng
  EDITOR, // Permissions.EDITOR = 6
  MODERATOR, // Permissions.MODERATOR = 7
}

enum Permission {
  ADMIN = 'ADMIN', // Permissions.ADMIN = ADMIN
  EDITOR = 'EDITOR', // Permissions.EDITOR = EDITOR
  MODERATOR = 'MODERATOR', // Permissions.MODERATOR = MODERATOR
}
export const objectUseEnum: {
  id: number;
  name: string;
  permission: Permission;
} = {
  id: 1,
  name: 'Marcus Freeman',
  permission: Permission.ADMIN,
};

// Any
export const anyArray: any[] = [
  {
    name: 'Marcus',
  },
  15,
];

// Union
export const unionArray: (string | number)[] = ['lalaland', 10];

// Literal
type Age = 22 | 30 | '45';
export const objectUseLiteral: {
  age: Age;
} = {
  age: 30,
};

// Function
export function sum(a: number, b: number): number {
  return a + b;
}

// Void
export function doHomework(): void {
  console.log('do homework');
}

// Unknown
let unkData: unknown;
unkData = 100;
if (typeof unkData === 'number') {
  // => vif unknown nên phải check
  unkData.toFixed(2);
}

// Never
/**
 * Có 3 ý nghĩa như sau:
 * - Không chứa dữ liệu
 * - Thể hiện 1 function trả về 1 lỗi
 * - Thể hiện 1 function chứa vòng vặp vô tận
 */
export function raiseError(err: string): never {
  throw new Error(err);
}

export function reject() {
  return raiseError('error');
}

export const loop = function forever() {
  while (true) {
    console.log('Hello World');
  }
};
