import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Todo from './todo';
import style from './home.module.css';
import NewTodo from './newTodo';

function Home() {
  const [todo, setTodo] = useState([]);

  const addNewTodo = (todoContent) => {
    setTodo((oldTodo) => {
      return [...oldTodo, { id: uuidv4(), todoContent }];
    });
  };

  const removeTodo = (id) => {
    setTodo((oldTodo) => {
      const filteredTodo = oldTodo.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };
  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <NewTodo newTodo={addNewTodo} />
      <Todo todo={todo} removeTodo={removeTodo} />
    </div>
  );
}

export default Home;
