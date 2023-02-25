const TodoHeader = ({ title }: { title: string }) => {
  return <h1 className="text-xl font-bold">{title}</h1>;
};

const TodoApp = () => {
  return (
    <div className="m-6">
      <TodoHeader title="Todo App" />
    </div>
  );
};

export default TodoApp;
