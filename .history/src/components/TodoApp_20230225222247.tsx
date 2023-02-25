const TodoHeader = ({ title }: { title: string }) => {
  return <h1 className="text-xl font-bold">{title}</h1>;
};

const TodoApp = () => {
  return (
    <div className="m-6">
      <TodoHeader title="Todo App" />
      <div className="inline-flex gap-3 justify-center items-center ">
        <input
          type="text"
          className="w-[400px] py-2 px-4 text-lg border border-slate-300 rounded-lg focus:border-slate-100"
        />
        <button
          type="button"
          className="w-[150px] bg-red-500 py-2 px-4 rounded-lg text-lg text-white"
        >
          Add todo
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
