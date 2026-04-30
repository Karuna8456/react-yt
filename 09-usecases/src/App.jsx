import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = React.useState(10)
  
function IncreaseNum(){
  setNum(num+1)
}
  function DecreaseNum(){
    setNum(num-1)
  }
  function Increase5Num(){
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num} </h1>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      <button onClick={Increase5Num}>increase 5</button>

    </div>
  )
}

export default App
