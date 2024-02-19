import { NewTaskForm } from './components/NewTaskForm'
import { TaskBoard } from './components/TaskBoard'

import { Header } from '../../components/Header'

export function ToDo() {
  return (
    <div>
      <Header />
      <NewTaskForm />
      <TaskBoard />
    </div>
  )
}
