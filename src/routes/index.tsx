import { Routes, Route } from 'react-router-dom'

import { ToDo } from '../pages/ToDo'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ToDo />} />
    </Routes>
  )
}
