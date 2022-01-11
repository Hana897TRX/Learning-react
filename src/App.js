import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { Card } from './components/Card';
import './css/app.css';

const backgrounImg = require('./img/background.jpg')

const todos = [
  { id: 1, text: 'Cortar cebolla', completed: false },
  { id: 2, text: 'Tomar el curso de intro de react', completed: false },
  { id: 3, text: 'Llorar con la llorona', completed: false }
];

function App(props) {
  return (
    <React.Fragment>
      <div className='container'>
        <img src={backgrounImg} alt='background img'/>
        <div>
          <Card>
            <TodoCounter />
          </Card>
          <Card>
            <TodoSearch/>
          </Card>
          <TodoList>
            {todos.map(todo => (
              <Card>
                <TodoItem key={todo.id} text={todo.text}/>
              </Card>
            ) )}
          </TodoList>
          <CreateTodoButton/>
          <div>
            <button>+</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
