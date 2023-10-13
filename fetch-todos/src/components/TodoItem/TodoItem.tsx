import { FC, JSX } from 'react';
import styles from './TodoItem.module.scss'

interface ITodoItemProps {
  title: string,
  completed: boolean
}
const TodoItem: FC<ITodoItemProps> = ({title, completed}): JSX.Element => {
  return (
    <div className={`${styles.card} ${completed ? styles.completed : ''}`}>
      <p className={styles.card__title}>{title}</p>
    </div>
  );
};
export default TodoItem;
