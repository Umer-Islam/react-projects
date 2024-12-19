import Header from "./components/Header";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
function App() {
  const todos = [
    { input: "first todo", complete: false },
    { input: "buy coffee", complete: false },
    { input: "plan the next year", complete: false },
    { input: "sleep at 2300", complete: true },
  ];

  const 
  return (
    <div>
      <Header todos={todos} />
      <Tabs  todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput />
      <Footer />
    </div>
  );
}

export default App;
