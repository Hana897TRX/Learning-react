import React from "react";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { id: 1, text: "Cortar cebolla", completed: true },
  { id: 2, text: "Tomar curso de React", completed: false },
  { id: 3, text: "Llorar con la llorona", completed: false },
  { id: 4, text: "Comprar un videojuego", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    newTodos[newTodos.findIndex((todo) => todo.text === text)].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    newTodos.splice(
      newTodos.findIndex((todo) => todo.text === text),
      1
    );
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
