import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './styles.module.css';

export interface TodoProps {
  id: number;
  content: string;
}

interface TodoContent {
  todoContent: TodoProps;
  onHandleDeleteTodo: (id: number) => void;
}

export function Todo({ todoContent, onHandleDeleteTodo }: TodoContent) {
  const [checked, setChecked] = useState(false);

  function handleCheckbox() {
    checked ? setChecked(false) : setChecked(true);
  }

  function handleDeleteTodo(id: number) {
    onHandleDeleteTodo(id);
  }

  return (
    <div className={styles.container}>

      <button type='button' onClick={handleCheckbox} className={styles.checkbox}>
        <input type="checkbox" onChange={handleCheckbox} checked={checked} className={styles.inputCheckbox} />
        <span className={styles.checkmark}></span>
      </button>
      <p className={checked ? styles.todoChecked : ''}>
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