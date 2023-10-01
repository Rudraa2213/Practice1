import React, { Fragment, useEffect, useState } from 'react'

function Counter() {
  const [sv, sf] = useState(0);
  const decrementNum = () => {
    sf(sv => sv - 1);
  }
  const decrementNum5 = () => {
    sf(sv => sv - 5);
  }
  const IncrementNum = () => {
    sf(sv => sv + 1);
  }
  const IncrementNum5 = () => {
    sf(sv => sv + 5);
  }
  return (
    <Fragment>
      <div className="container text-center border mt-5 bg-light p-1">
      <h1 className='p-5'>Increment Decrement</h1>
        <div className="row">
          <div className="col">
            <span className='btn btn-info m-2' onClick={decrementNum}>-1</span>
            <span className='btn btn-info m-2' onClick={decrementNum5}>-5</span>
            <span className='fs-5 p-3'>Number is: {sv}</span>
            <span className='btn btn-success m-2' onClick={IncrementNum}>+1</span>
            <span className='btn btn-success m-2' onClick={IncrementNum5}>+5</span>
            
          </div>
        </div>
      </div>
    <div className="container">
      <div className="row">
        <div className="col">
        </div>
      </div>
    </div>

    </Fragment>
  )
}


export default Counter

export function Effectivefun(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return <h1>{count}</h1>
}


