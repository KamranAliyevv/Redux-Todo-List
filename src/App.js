import "./index.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo">
      <div className="container">
        <div className="todo-inner">
        <h3>Todo List</h3>
        <Form/>
        <TodoList/>
      </div>
      </div>
    </div>
  );
}

export default App;
