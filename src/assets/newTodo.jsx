import { useState } from 'react';
import style from './css/newTodo.module.css';

function NewTodo(props) {
  const [todo, setTodo] = useState({ title: '', desc: '', number: 0 });
  const { title, desc, number } = todo;
  const { newTodo } = props;

  const handleInput = (event) => {
    const { name, value } = event.target;

    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !desc || !number) {
      alert('please fill all the box');
    }
    newTodo(todo);
    setTodo({ title: '', desc: '', number: 0 });
  };

  return (
    <form action="" className={style.form} onSubmit={handleSubmit}>
      <div className={style['form-field']}>
        <label htmlFor="Title">Title : </label>
        <input type="text" name="title" value={title} onChange={handleInput} />
      </div>

      <div className={style['form-field']}>
        <label htmlFor="Desc">Desc : </label>
        <input type="text" name="desc" value={desc} onChange={handleInput} />
      </div>

      <div className={style['form-field']}>
        <label htmlFor="Number">Number : </label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleInput}
        />
      </div>

      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;
