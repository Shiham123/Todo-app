import style from './css/perTodo.module.css';
import { FaTrash } from 'react-icons/fa';

const PerTodo = (props) => {
  const {
    id,
    todoContent: { title, desc, number },
  } = props.todo;

  const { removeItem } = props;

  const handleClick = () => {
    removeItem(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h1>{title}</h1>
        <p className={style.todoPara}>{desc}</p>
        <p className={style.todoPara}>{number}</p>
      </div>

      <div>
        <button className={style.btn} onClick={handleClick}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default PerTodo;
