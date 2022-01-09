import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const todos = [
  { id: 1, text: 'Cortar cebolla', completed: false },
  { id: 2, text: 'Tomar el curso de intro de react', completed: false },
  { id: 3, text: 'Llorar con la llorona', completed: false }
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id} text={todo.text}/>
        ) )}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
