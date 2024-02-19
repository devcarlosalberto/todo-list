import { useContext } from 'react'

import { Check, Trash } from 'phosphor-react'

import { TaskContext } from '../../../../contexts/TaskContext'

import {
  TaskBoardContainer,
  TaskInfos,
  TaskList,
  CheckboxContainer,
  EmptyTasks,
} from './styles'

import clipboardSvg from '../../../../assets/clipboard.svg'

export function TaskBoard() {
  const { tasks, toggleTaskStatus, removeTask } = useContext(TaskContext)

  const tasksCompletedCounter = tasks.reduce((completedCount, task) => {
    return task.isCompleted ? completedCount + 1 : completedCount
  }, 0)

  const tasksCreatedCounter = tasks.length

  function handleToggleTaskStatus(taskId: number) {
    toggleTaskStatus(taskId)
  }

  function handleRemoveTask(taskId: number) {
    removeTask(taskId)
  }

  return (
    <TaskBoardContainer>
      <TaskInfos>
        <p>
          Tarefas criadas <span>{tasksCreatedCounter}</span>
        </p>
        <p>
          Tarefas concluídas{' '}
          <span>
            {tasksCompletedCounter} de {tasksCreatedCounter}
          </span>
        </p>
      </TaskInfos>

      {tasks.length !== 0 && (
        <TaskList>
          {tasks.map((task) => (
            <li key={task.id}>
              <CheckboxContainer
                className={task.isCompleted ? 'checked' : 'notChecked'}
                onClick={() => handleToggleTaskStatus(task.id)}
              >
                {task.isCompleted && <Check size={24} />}
                <input readOnly type="checkbox" checked={task.isCompleted} />
              </CheckboxContainer>
              <p className={task.isCompleted ? 'text-line-through' : ''}>
                {task.description}
              </p>
              <button type="submit" onClick={() => handleRemoveTask(task.id)}>
                <Trash size={24} />
              </button>
            </li>
          ))}
        </TaskList>
      )}

      {tasks.length === 0 && (
        <EmptyTasks>
          <div>
            <img src={clipboardSvg} alt="Uma prancheta sem anotações" />
          </div>
          <p>
            <strong>Você ainda não tem tarefas cadastradas.</strong>
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </EmptyTasks>
      )}
    </TaskBoardContainer>
  )
}
