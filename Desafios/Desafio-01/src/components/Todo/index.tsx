import { Trash } from 'phosphor-react';

import styles from './styles.module.css';

export interface TodoProps {
  id: string;
  checked: boolean;
  content: string;
}

interface TodoContent {
  todoContent: TodoProps;
  onHandleDeleteTodo: (id: string) => void;
  onHandleCheckedTodo: (id: string) => void;
}

export function Todo({ todoContent, onHandleCheckedTodo, onHandleDeleteTodo }: TodoContent) {
  function handleCheckbox(id: string) {
    onHandleCheckedTodo(id);
  }

  function handleDeleteTodo(id: string) {
    onHandleDeleteTodo(id);
  }

  return (
    <div className={styles.container}>
      <button
        type='button'
        onClick={() => handleCheckbox(todoContent.id)}
        className={styles.checkbox}
      >
        <input
          type="checkbox"
          onChange={() => handleCheckbox(todoContent.id)}
          checked={todoContent.checked}
          className={styles.inputCheckbox}
        />
        <span className={styles.checkmark}></span>
      </button>
      <p className={todoContent.checked ? styles.todoChecked : ''}>
        {todoContent.content}
      </p>
      <button
        type='button'
        className={styles.deleteTodo}
        title='Deletar tarefa'
        onClick={() => handleDeleteTodo(todoContent.id)}
      >
        <Trash size={14} />
      </button>
    </div>
  )
}