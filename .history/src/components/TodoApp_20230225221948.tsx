const TodoHeader = ({ title }: { title: string }) => {
  return <h1 className="text-xl font-bold">{title}</h1>;
};

const TodoApp = () => {
  return (
    <div className="m-6">
      <TodoHeader title="Todo App" />
      <div className="inline-flex gap-3 justify-center items-center w-[400px]">
        <input
          type="text"
          className="py-2 px-4 text-lg border border-slate-100 rounded-lg"
        />
      </div>
    </div>
  );
};

export default TodoApp;
