import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Calcutator from './Component/Calcutator'
import Stopwatch from './Component/Stopwatch'
import Login from './Component/Login'
import Navbar from './Component/Navbar'
import Protected from './Component/Protected'
import './App.css'
import TodoList from './Component/TodoList'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Protected Component={Stopwatch} />} />
        <Route path="/todolist" element={<Protected Component={TodoList} />} />
        <Route
          path="/Calcutator"
          element={<Protected Component={Calcutator} />}
        />
      </Routes>
    </>
  )
}

export default App
