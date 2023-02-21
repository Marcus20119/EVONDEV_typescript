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
