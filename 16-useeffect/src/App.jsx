import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [num, setNum] = React.useState(0);
  const [num2, setNum2] = React.useState(100);

  function numchanging(){
    console.log('num is changing ...');
    
  }

  function num2changing(){
    console.log('num2 is changing...')
  }

  useEffect (function(){
    console.log();
  },[num, num2] )
  
  

  return (
    <div>
      <h2> num is {num}</h2>
      <h2> num2 is{num2}</h2>
    <button onClick={()=>{
      setNum(num+1)
    }}>Change num</button>

<button onClick={()=>{
      setNum2(num2-1)
    }}>Change num2</button>
    </div>
  )
}

export default App
