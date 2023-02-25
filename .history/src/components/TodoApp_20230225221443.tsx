const TodoHeader = ({ title }: { title: string }) => {
  return <h1 className="text-lg font-bold">{title}</h1>;
};

const TodoApp = () => {
  return (
    <div className="m-4">
      <TodoHeader title="Todo App" />
    </div>
  );
};

export default TodoApp;
