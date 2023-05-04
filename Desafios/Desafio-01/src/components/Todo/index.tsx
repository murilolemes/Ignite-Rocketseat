import { Trash } from 'phosphor-react';

import checkbox from '../../assets/checkbox.svg';
import checked from '../../assets/ckecked.svg';

import styles from './styles.module.css'

export function Todo() {
  return (
    <div className={styles.container}>
      <button className={styles.checkbox}>
        {/* <img src={checkbox} /> */}
        <img src={checked} />
      </button>

      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button type='button' title='Deletar tarefa'>
        <Trash size={14} />
      </button>
    </div>
  )
}