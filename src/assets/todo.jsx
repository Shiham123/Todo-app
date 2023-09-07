import PerTodo from './perTodo';
import style from './todo.module.css';
import PropTypes from 'prop-types';

function Todo(props) {
  const { todo, removeTodo } = props;

  const showTodo = todo.map((item) => (
    <PerTodo key={item.id} todo={item} removeTodo={removeTodo} />
  ));

  return <section className={style.todo}>{showTodo}</section>;
}

Todo.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
