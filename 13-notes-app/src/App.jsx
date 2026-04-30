import React from 'react'
import { useState } from 'react'

const App = () => {

 const [title, setTitle] = React.useState(' ');
 const [details, setDetails] = React.useState(' ');
 const [task, setTask] = React.useState([]);

  const submithandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title,details})
    setTask(copyTask)

   console.log(copyTask);

    setTitle(' ')
    setDetails(' ')

  }
  
  return (
    <div className='h-screen bg-white lg:flex'>
     <form onSubmit={(e) => {
      submithandler(e)
     }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
      
      <h1 className='text-4xl font-bold' >Add notes</h1>

        <input type="text" 
       placeholder='Enter notes Heading'
        className='px-5 py-2 w-full border-2 rounded ' 
       
        />
      

      <input type="text" 
      className='px-5 py-2 h-25 w-full border-2 rounded '
      placeholder='Enter Details'
      
      />
      <button className='px-5 py-2 bg-black w-full text-white border-2 rounded'>Add Note</button>
      
      
     </form> 
     
     <div className='lg:w-1/2 lg:border-l-2 p-10'>
     <h1 className='text-4xl font-bold' >Recent notes</h1>
     <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
    
     <div className='h-32 w-32 rounded-2xl bg-black'></div>
     <div className='h-32 w-32 rounded-2xl bg-black'></div>
     
     </div>
    </div>
     </div>
   
  )
}

export default App
