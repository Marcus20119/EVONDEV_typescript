import { useReducer, useRef } from 'react';

const TodoHeader = ({ title }: { title: string }) => {
  return <h1 className="text-3xl font-black text-cyan-900 mb-4">{title}</h1>;
};

type TodoAction =
  | { type: 'ADD'; description: string }
  | { type: 'REMOVE'; id: number };

interface TodoList {
  id: number;
  description: string;
}

const todoReducer = (state: TodoList[], action: TodoAction) => {
  switch (action.type) {
    case 'ADD': {
      return [
        ...state,
        {
          id: new Date().getTime(),
          description: action.description,
        },
      ];
    }
    case 'REMOVE': {
      return state.filter(item => item.id !== action.id);
    }
    default:
      throw new Error('');
  }
};

const initialState: TodoList[] = [
  {
    id: 1,
    description: 'Learning Typescript',
  },
];

const TodoApp = () => {
  const [todoListData, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = () => {
    if (inputRef.current) {
      dispatch({ type: 'ADD', description: inputRef.current.value });
      inputRef.current.value = '';
    }
  };

  return (
    <div className="m-6">
      <TodoHeader title="Todo App" />
      <div className="inline-flex gap-3 justify-center items-center ">
        <input
          ref={inputRef}
          type="text"
          className="w-[400px] py-2 px-4 text-lg border border-slate-600 rounded-lg focus:border-slate-500"
        />
        <button
          type="button"
          className="w-[150px] bg-cyan-600 py-2 px-4 rounded-lg text-lg text-white font-semibold tracking-wider opacity-100 hover:opacity-80"
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>
      <div className=" flex flex-col items-start gap-4 w-[400px] my-6">
        {todoListData.length > 0 &&
          todoListData.map(item => (
            <div key={item.id} className="flex items-center gap-3 w-full">
              <span className="flex-1">{item.description}</span>
              <button
                type="button"
                className="bg-teal-600 py-2 px-4 rounded-lg font-semibold text-white tracking-wide opacity-100 hover:opacity-80"
              >
                Remove
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoApp;
