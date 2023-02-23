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

// Record
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};
