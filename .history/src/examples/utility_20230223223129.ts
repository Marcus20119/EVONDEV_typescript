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
