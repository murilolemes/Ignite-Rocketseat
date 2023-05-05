import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './styles.module.css';

export function Todo() {
  const [checked, setChecked] = useState(false);

  function handleCheckbox() {
    checked ? setChecked(false) : setChecked(true);
  }

  return (
    <div className={styles.container}>

      <button type='button' onClick={handleCheckbox} className={styles.checkbox}>
        <input type="checkbox" checked={checked} className={styles.inputCheckbox} />
        <span className={styles.checkmark}></span>
      </button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button
        type='button'
        className={styles.deleteTodo}
        title='Deletar tarefa'
      >
        <Trash size={14} />
      </button>
    </div>
  )
}