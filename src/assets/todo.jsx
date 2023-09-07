import style from './css/todo.module.css';
import PerTodo from './perTodo';

const Todo = (props) => {
  const { todo, removeItem } = props;

  const showTodo = todo.map((item) => (
    <PerTodo key={item.id} todo={item} removeItem={removeItem} />
  ));
  return <section className={style.todo}>{showTodo}</section>;
};

export default Todo;
