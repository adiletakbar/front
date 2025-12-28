import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoCards from './components/ToDoCards'
import ToDoGrid from './components/ToDoGrid/ToDoGrid' 
import './App.css'

function App() {
  return (
    <div>
      <ToDoGrid/>
    </div>
  )
}

export default App
