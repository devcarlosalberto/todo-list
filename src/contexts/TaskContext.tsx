import { ReactNode, createContext, useState, useEffect } from 'react'

interface Task {
  id: number
  description: string
  isCompleted: boolean
}

interface TaskContextProps {
  tasks: Task[]
  addNewTask: (description: string) => void
  removeTask: (taskId: number) => void
  toggleTaskStatus: (taskId: number) => void
}

interface TaskContextProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextProps)

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function addNewTask(description: string) {
    const id = new Date().getTime()

    const newTask: Task = {
      id,
      description,
      isCompleted: false,
    }

    setTasks((prevState) => {
      const tasksUpdated = [...prevState, newTask]
      localStorage.setItem(
        '@todo-ignite-1.0.0:tasks',
        JSON.stringify(tasksUpdated),
      )
      return tasksUpdated
    })
  }

  function removeTask(taskId: number) {
    setTasks((prevState) => {
      const tasksUpdated = prevState.filter((task) => task.id !== taskId)
      localStorage.setItem(
        '@todo-ignite-1.0.0:tasks',
        JSON.stringify(tasksUpdated),
      )
      return tasksUpdated
    })
  }

  function toggleTaskStatus(taskId: number) {
    setTasks((prevState) => {
      const tasksUpdated = prevState.map((task) => {
        if (task.id === Number(taskId)) {
          return {
            id: task.id,
            description: task.description,
            isCompleted: !task.isCompleted,
          }
        } else {
          return task
        }
      })
      localStorage.setItem(
        '@todo-ignite-1.0.0:tasks',
        JSON.stringify(tasksUpdated),
      )
      return tasksUpdated
    })
  }

  useEffect(() => {
    const tasksStoraged = localStorage.getItem('@todo-ignite-1.0.0:tasks')

    if (tasksStoraged) {
      const tasks = JSON.parse(tasksStoraged)
      setTasks(tasks)
    }
  }, [])

  return (
    <TaskContext.Provider
      value={{ tasks, addNewTask, toggleTaskStatus, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}
