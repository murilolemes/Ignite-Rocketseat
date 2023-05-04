import { PlusCircle, ClipboardText } from 'phosphor-react';

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Todo } from './components/Todo';

import styles from './app.module.css'
import './styles/global.css'

export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <form className={styles.formAddToDo}>
        <Input
          hasBorder={false}
          placeholder='Adicione uma nova tarefa'
        />
        <button>Criar <PlusCircle weight='regular' size={16} /></button>
      </form>
      <div className={styles.content}>
        <div className={styles.todoCount}>
          <p className={styles.taskCreated}>Tarefas criadas <span>0</span></p>
          <p className={styles.completed}>Concluídas <span>2 de 5</span></p>
        </div>
        <div>
          <div className={styles.notExistsTodoList}>
            <ClipboardText size={56} />
            <p className={styles.FirstP}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>

          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </div>
  )
}
