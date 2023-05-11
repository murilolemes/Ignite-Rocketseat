import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle, ClipboardText } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Todo, TodoProps } from './components/Todo';

import styles from './app.module.css'
import './styles/global.css'

const todoList: TodoProps[] = [
  {
    id: uuidv4(),
    checked: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: uuidv4(),
    checked: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: uuidv4(),
    checked: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
  {
    id: uuidv4(),
    checked: true,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  },
]

export function App() {
  const [updateTodoList, setUpdateTodoList] = useState([...todoList]);
  const [newTodo, setNewTodo] = useState('');

  function handleNewTodo(event: FormEvent) {
    event.preventDefault();

    setUpdateTodoList([...updateTodoList, {
      id: uuidv4(),
      checked: false,
      content: newTodo,
    }]);

    setNewTodo('');
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTodo(event.target.value);
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleCheckbox(id: string) {
    const updateChecked = updateTodoList.map(todo => {
      if (todo.id === id) {
        return {
          id: todo.id,
          checked: todo.checked ? false : true,
          content: todo.content
        }
      } else {
        return todo
      }
    });

    setUpdateTodoList(updateChecked)
  }

  function handleDeleteTodo(id: string) {
    const deleteTodo = updateTodoList.filter(todo => todo.id !== id);

    setUpdateTodoList(deleteTodo);
  }

  const isNewTodoEmpty = newTodo.length === 0;

  const todoChecked = updateTodoList.reduce((acc, element) => {
    return acc += element.checked === true ? 1 : 0;
  }, 0)

  return (
    <div className={styles.container}>
      <Header />
      <form onSubmit={handleNewTodo} className={styles.formAddToDo}>
        <Input
          placeholder='Adicione uma nova tarefa'
          value={newTodo}
          onChange={handleNewTodoChange}
          onInvalid={handleNewTodoInvalid}
          required
          hasBorder={!isNewTodoEmpty}
        />
        <button
          disabled={isNewTodoEmpty}
        >
          Criar
          <PlusCircle weight='regular' size={16} />
        </button>
      </form>
      <div className={styles.content}>
        <div className={styles.todoCount}>
          <p className={styles.taskCreated}>
            Tarefas criadas
            <span>{updateTodoList.length}</span>
          </p>
          <p className={styles.completed}>
            Concluídas
            <span>{updateTodoList.length === 0 ? 0 : `${todoChecked} de ${updateTodoList.length}`}</span>
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
                <Todo
                  key={todo.id}
                  onHandleDeleteTodo={handleDeleteTodo}
                  todoContent={todo}
                  onHandleCheckedTodo={handleCheckbox}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
