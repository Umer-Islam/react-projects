import Header from "./components/Header";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
function App() {
  return (
    <div>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput/>
      <Footer />
    </div>
  );
}

export default App;
