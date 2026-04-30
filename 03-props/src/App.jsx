import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='Aditya' age = {24}/>
      <Card  user='Ashutosh' age = {22}/>
      <Card user='Karuna' age = {21}/>
    </div>
  )
}

export default App
