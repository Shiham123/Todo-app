import style from './perTodo.module.css';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

function PerTodo(props) {
  const {
    id,
    todoContent: { title, desc },
  } = props.todo;
  const { removeTodo } = props;

  const handleClick = () => {
    removeTodo(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h1>{title}</h1>
        <p className={style.todoPara}>{desc}</p>
      </div>

      <div>
        <button className={style.btn} onClick={handleClick}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
}

PerTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    todoContent: PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default PerTodo;
