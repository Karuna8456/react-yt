
import React from 'react'

const App = () => {

  const [num, setNum] = React.useState({user:'Karuna', age:20})

  const btnclick = () => {
   setNum (prev => ({...prev,age:50}))
  }

  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={btnclick}>Click</button>
    </div>
  )
}

export default App
