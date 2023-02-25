//  in
export function log(obj: { name: unknown } | { age: number }) {
  if ('name' in obj) {
    console.log(obj.name);
  }
  if ('age' in obj) {
    console.log(obj.age);
  }
}

// typeof vs keyof
const myStudent = {
  id: 1,
  name: 'Marcus',
  age: 28,
};
export type StudentTypeof = typeof myStudent;
export type StudentKeyof = keyof typeof myStudent;
