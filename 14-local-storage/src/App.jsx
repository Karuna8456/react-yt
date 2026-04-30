import React from 'react'

const App = () => {

  const user = {
    username: 'karuna',
    age: 22,
    city:'bhopal'
  }
  localStorage.setItem('user',JSON.stringify(user))

 const usera = JSON.parse(localStorage.getItem('user'))

 console.log(usera);
 
  return (

    <div>
      app
    </div>
  )
}

export default App
