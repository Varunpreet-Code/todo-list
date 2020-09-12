import React, {useState} from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {

  // variables
const [todos, setTodos] = useState([
  { text: "Finish plus project", iscompleted: false },
  { text: "Feed peggy", iscompleted: false },
  { text: "Sleep", iscompleted: false },
]);

// methods

const addTodo = (text) => {
  const newtodos = [...todos,{ text }];
  setTodos(newtodos);
};

const completeTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);

};

const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

  // temlate
  return (
  <div className="app">
    <div className="todo-list">
      <div>
    <h1>My todo list</h1>
    {todos.map((todo, index) => (
      <TodoItem 
      todo={todo} 
      key={index}
      index={index}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      />

    ))}
    <TodoForm addTodo={addTodo} />
      </div>
    </div>
  </div>
  );

}

export default App;
