import { useState } from 'react';
import { PlusCircle, ClipboardText } from 'phosphor-react';

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Todo, TodoProps } from './components/Todo';

import styles from './app.module.css'
import './styles/global.css'

const todoList: TodoProps[] = [
  {
    id: 1,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 2,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 3,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 4,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 5,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: 6,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  }
]

export function App() {
  const [updateTodoList, setUpdateTodoList] = useState([...todoList])

  function handleDeleteTodo(id: number) {
    const teste = updateTodoList.filter(todo => todo.id !== id)

    setUpdateTodoList(teste)
  }

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
          <p className={styles.taskCreated}>
            Tarefas criadas
            <span>{updateTodoList.length}</span>
          </p>
          <p className={styles.completed}>
            Concluídas
            <span>2 de {updateTodoList.length}</span>
          </p>
        </div>
        <div>
          {updateTodoList.length === 0 ?
            <div className={styles.notExistsTodoList}>
              <ClipboardText size={56} />
              <p className={styles.FirstP}>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            :
            updateTodoList.map(todo => {
              return (
                <Todo key={todo.id}
                  onHandleDeleteTodo={handleDeleteTodo}
                  todoContent={todo}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
