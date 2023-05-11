import { InputHTMLAttributes } from 'react';

import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasBorder: boolean;
}

export function Input({ hasBorder, ...props }: InputProps) {
  return (
    <input
      className={hasBorder ? styles.inputHasBorder : styles.input}
      {...props}
    />
  )
}