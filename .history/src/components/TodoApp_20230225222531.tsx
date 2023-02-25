const TodoHeader = ({ title }: { title: string }) => {
  return <h1 className="text-3xl font-black text-cyan-900 mb-4">{title}</h1>;
};

const TodoApp = () => {
  return (
    <div className="m-6">
      <TodoHeader title="Todo App" />
      <div className="inline-flex gap-3 justify-center items-center ">
        <input
          type="text"
          className="w-[400px] py-2 px-4 text-lg border border-slate-600 rounded-lg focus:border-slate-300"
        />
        <button
          type="button"
          className="w-[150px] bg-cyan-600 py-2 px-4 rounded-lg text-lg text-white font-semibold tracking-wider"
        >
          Add todo
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
