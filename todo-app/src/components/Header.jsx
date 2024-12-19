export default function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const isTaskPlural = todosLength !== 1;

  return (
    <>
      <header>
        <h2 className="text-gradient">you have {todosLength} open task{isTaskPlural? "s":""}...</h2>
      </header>{" "}
    </>
  );
}
