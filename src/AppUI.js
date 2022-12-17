import React from "react";
import "./css/App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

function AppUI(props) {
  return (
    <React.Fragment>
      <TodoCounter total={props.totalTodos} completed={props.completedTodos} />
      <TodoSearch
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <TodoList>
        {props.searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => props.completeTodo(todo.text)}
            onDelete={() => props.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
