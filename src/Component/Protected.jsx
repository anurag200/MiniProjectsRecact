import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
  const { Component } = props
  const Navigates = useNavigate()
  useEffect(() => {
    let login = localStorage.getItem('login')
    if (!login) {
      Navigates('/login')
    }
  })

  return (
    <>
      <Component />
    </>
  )
}

export default Protected
