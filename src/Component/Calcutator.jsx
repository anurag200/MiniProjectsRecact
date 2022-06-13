import React, { useState } from 'react'

const Calculator = () => {
  const [user, setUser] = useState('')
  const handlchange = (e) => {
    setUser(e.target.value)
  }
  // console.log(user)
  const clearData = () => {
    setUser('')
  }
  const buttonvalue = (e) => {
    setUser(user.concat(e.target.value))
  }
  const resultData = () => {
    setUser(eval(user))
  }
  return (
    <>
      <div className="container">
        <div className="calculator mx-auto mt-5">
          <div className="row m-0">
            <div className="col-6  p-0 py-4 w-100  ">
              <input
                type="text"
                className="w-100 text-end  px-1"
                onChange={handlchange}
                value={user}
                placeholder={'0'}
              />
            </div>
          </div>
          <div className="row g-3 text-center  m-0">
            <div className="col-3 p-0">
              <button onClick={clearData}>c</button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={'*'}>
                x
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={'/'}>
                %
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={')'}>
                )
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={7}>
                7
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={8}>
                8
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={9}>
                9
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={'('}>
                (
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={4}>
                4
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={5}>
                5
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={6}>
                6
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={'-'}>
                -
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={1}>
                1
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={2}>
                2
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={3}>
                3
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={'+'}>
                +
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={'00'}>
                00
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={0}>
                0
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={buttonvalue} value={'.'}>
                .
              </button>
            </div>
            <div className="col-3 p-0">
              <button onClick={resultData} value={'='}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator
