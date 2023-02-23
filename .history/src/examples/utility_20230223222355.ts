interface Todo {
  title: string;
  description: string;
}

type NewTodo = Partial<Todo>;

function updateTodo(todo: Todo, newTodo: NewTodo) {
  return {
    ...todo,
    ...newTodo,
  };
}
