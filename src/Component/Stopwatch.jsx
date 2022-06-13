import React, { useState } from 'react'
let adjustInterval = undefined
const Stopwatch = () => {
  const [watchvalue, setwatchvalue] = useState(0)
  const [disable, setdisable] = useState(false)
  const start = () => {
    adjustInterval = setInterval(() => {
      setwatchvalue((x) => {
        return x + 1
      })
    }, 1000)
    setdisable(true)
  }
  const stop = () => {
    clearInterval(adjustInterval)
    setdisable(false)
  }
  const resctwatch = () => {
    setwatchvalue(0)
    clearInterval(adjustInterval)
    setdisable(false)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-10 col-10 mx-auto mt-5">
            <div className="watch_card shadow p-3 ">
              <h1>{watchvalue}</h1>
              <div className="button_card mt-4">
                <button disabled={disable} onClick={() => start()}>
                  start
                </button>
                <button onClick={() => stop()}>Stop</button>
                <button onClick={() => resctwatch()}>resct</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stopwatch
