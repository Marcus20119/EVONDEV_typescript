// Partial => Biến toàn bộ thành optional
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

// Required => Biến toàn bộ thành required
interface Job {
  title?: string;
  description?: string;
}

export const myJob: Required<Job> = {
  title: 'Fucking',
  description: 'Fucking with daddy',
};

// Readonly => Cao hơn cả const, không cho thay đổi bất cứ key nào
interface Book {
  title: string;
}

export const myBook: Readonly<Book> = {
  title: 'The life of Pi',
};

// Record => Tạo ra 1 type object dựa vào 2 type có sẵn
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

// Pick => Lấy những thuộc tính ta cần từ 1 type có sẵn
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
