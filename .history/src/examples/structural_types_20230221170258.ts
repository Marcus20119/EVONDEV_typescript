// Object
export const object: {
  id: number;
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  id: 1,
  name: 'Marcus Freeman',
  age: 22,
  isAdmin: true,
};
// Array
export const array: string[] = ['movie', 'tv', 'person'];
export const mixArray: (string | number | boolean)[] = ['lalaland', 10, true];
// Array of Object
export const arrayInObject: {
  id: number;
  name: string;
}[] = [
  {
    id: 1,
    name: 'Marcus Freeman',
  },
  {
    id: 2,
    name: 'Lena Freeman',
  },
];
