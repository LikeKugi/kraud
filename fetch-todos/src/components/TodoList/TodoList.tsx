import { JSX, useEffect } from 'react';
import { useLazyFetchTodosQuery } from '@store/api';
import { useAppSelector } from '@store/store';
import { selectTodos } from '@store/todoSlice';
import TodoItem from '@components/TodoItem/TodoItem';

const TodoList = (): JSX.Element => {
  const [fetchTodos, {isSuccess, data}] = useLazyFetchTodosQuery();
  const todos = useAppSelector(selectTodos);

  useEffect(() => {
    if (!todos.length) {
      fetchTodos();
    }
  }, [todos])

  if (isSuccess && data) {
    return (<>
      {data.map(todo => (<TodoItem title={todo.title} completed={todo.completed} key={todo.id} />))}
    </>)
  }
  return (
    <>
    </>
  );
};
export default TodoList;
