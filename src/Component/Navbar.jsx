import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="header_nav">
          <div className="row">
            <div className="col-12  ms-auto">
              <ul>
                <li>
                  <NavLink className="nav_items" to={'/'}>
                    Stop Watch
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav_items" to={'/todolist'}>
                    Todolist
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav_items" to={'/Calcutator'}>
                    Calcutator
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav_items" to={'/login'}>
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
