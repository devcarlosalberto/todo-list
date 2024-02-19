import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import { TaskContext } from '../../../../contexts/TaskContext'

import { NewTaskFormContainer } from './styles'

export function NewTaskForm() {
  const [newTaskDescription, setNewTaskDescription] = useState('')

  const { addNewTask } = useContext(TaskContext)

  function handleChangeNewTaskDescription(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setNewTaskDescription(event.target.value)
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()

    if (newTaskDescription === '') {
      return alert('Insira ao menos uma descrição para sua nova tarefa.')
    }

    addNewTask(newTaskDescription)

    resetInput()
  }

  function resetInput() {
    setNewTaskDescription('')
  }

  return (
    <NewTaskFormContainer onSubmit={handleSubmitForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleChangeNewTaskDescription}
        value={newTaskDescription}
        className={newTaskDescription && 'fill'}
      />

      <button type="submit">
        Criar <PlusCircle size={18} weight="bold" />
      </button>
    </NewTaskFormContainer>
  )
}
