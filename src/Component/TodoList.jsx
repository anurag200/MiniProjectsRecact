import React, { useEffect, useState } from 'react'

const getlocalstorge = () => {
  const list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

const TodoList = () => {
  const [inputvalue, Setinputvale] = useState('')
  const [Alldata, setAlldata] = useState(getlocalstorge())
  const AddData = () => {
    if (inputvalue.length > 2) {
      setAlldata([...Alldata, inputvalue])
      Setinputvale('')
      console.log('anuarfav')
    } else {
      alert('please enter value')
    }
  }
  const deletedata = (id) => {
    const felterdara = Alldata.filter((cur, index) => id != index)
    setAlldata(felterdara)
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(Alldata))
  }, [Alldata])
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-12 text-center">
            <h1>TODO LIST</h1>
          </div>
          <div className="row m-0">
            <div className="col-md-4 col-sm-6 col-12  mx-auto shadow ">
              <form onClick={AddData}>
                <div className="row todolist-box  d-flex justify-content-center align-items-center">
                  <div className="col-10  p-0">
                    <input
                      type="text"
                      onChange={(e) => Setinputvale(e.target.value)}
                      value={inputvalue}
                    />
                  </div>
                  <div className="col-2 p-0 ">
                    <button>Add</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* lodolist_data */}
        <div className="row g-4 lodolist_data mt-5">
          {Alldata.map((cur, index) => {
            return (
              <>
                <div className="col-md-4 col-sm-6 col-12" key={index}>
                  <div
                    className="card w-100  position-relative"
                    style={{ height: '130px' }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{index + 1}</h5>
                      <p className="card-text">{cur.slice(0, 50)}</p>
                    </div>
                    <button
                      className="ms-auto position-absolute  bottom-0  end-0 m-2"
                      onClick={() => deletedata(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TodoList
