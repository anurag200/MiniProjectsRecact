import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Loginfun = () => {
    localStorage.setItem('login', true)
    Navigates('/')
  }
  const Navigates = useNavigate(
    useEffect(() => {
      let login = localStorage.getItem('login')
      if (login) {
        Navigates('/')
      }
    }, []),
  )
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 shadow py-3 text-center mx-auto mt-5">
            <input type="text" placeholder="enter user id" className="w-75" />{' '}
            <br />
            <br />
            <input
              type="password"
              placeholder="enter password"
              className="w-75"
            />
            <br /> <br />
            <button className="w-25" onClick={Loginfun}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
