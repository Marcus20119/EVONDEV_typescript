// Partial<Type> => Biến toàn bộ thành optional
interface Todo {
  title: string;
  description: string;
}

type NewTodo = Partial<Todo>;

export function updateTodo(todo: Todo, newTodo: NewTodo) {
  return {
    ...todo,
    ...newTodo,
  };
}

// Required<Type> => Biến toàn bộ thành required
interface Job {
  title?: string;
  description?: string;
}

export const myJob: Required<Job> = {
  title: 'Fucking',
  description: 'Fucking with daddy',
};

// Readonly<Type> => Cao hơn cả const, không cho thay đổi bất cứ key nào
interface Book {
  title: string;
}

export const myBook: Readonly<Book> = {
  title: 'The life of Pi',
};

// Record<Keys, Type> => Tạo ra 1 type object dựa vào 2 type có sẵn
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = 'miffy' | 'boris' | 'mordred';

export const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

export const recordeExample: Record<number, string> = {
  1: 'one',
  2: 'two',
  3: 'three',
};

// Pick<Type, Keys> => Lấy những thuộc tính ta cần từ 1 type có sẵn
interface TodoPick {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPickPreview = Pick<TodoPick, 'title' | 'completed'>;

export const todoPick: TodoPickPreview = {
  title: 'Clean room',
  completed: false,
};

// Omit<Type, Keys> => Ngược lại với Pick, nó sẽ loại trừ ra
interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoOmitPreview = Omit<TodoOmit, 'description'>;

export const todoOmit: TodoOmitPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

// Exclude<UnionType, ExcludedMembers> => Loại trừ từ Union Type
export type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

// Extract<Type, Union> =>
export type T1 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
export type T2 = Extract<string | number | (() => void), Function>;

// NonNullable<Type> => Loại trừ các type falsy
export type T3 = NonNullable<string | number | undefined>;
