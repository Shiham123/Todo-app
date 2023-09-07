import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewTodo from './newTodo';
import style from './css/home.module.css';
import Todo from './todo';

function Home() {
  const [todo, setTodo] = useState([]);

  const addTodo = (todoContent) => {
    setTodo((prevTodo) => {
      const newTodo = { id: uuidv4(), todoContent };
      return [...prevTodo, newTodo];
    });
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => {
      const filteredTodo = prevTodo.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };

  return (
    <div className={style.container}>
      <h1>Todo app</h1>
      <NewTodo newTodo={addTodo} />
      <Todo todo={todo} removeItem={removeTodo} />
    </div>
  );
}

export default Home;
