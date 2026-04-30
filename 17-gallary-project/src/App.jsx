import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {

 const [userData, setUserData] = React.useState([]);

 const [index, setIndex] = React.useState(1);

  const getData = async () => {
   const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=500`)
   setUserData(response.data);
   console.log(response.data);
  }

  useEffect(function(){
   getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute  top-0.5 left-0.5 
  translate-x-0.5 translate-y-0.5'>Loading...</h3>
   
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
        <div className='h-50 w-56 overflow-hidden rounded-xl'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>

    })
  }


  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button
        style={{opacity:index == 1 ? 0.6: 1}}
        className='bg-amber-400 cursor-pointer active:scale-95 text-black rounded-2xl px-4 py-2 font-semibold' 
        onClick={()=>{
         if(index>1){
          setIndex(index-1)
         }
         }}>
          previous
          </button>
          <h4>page {index}</h4>
        <button className='bg-amber-400 cursor-pointer active:scale-95 text-black rounded-2xl px-4 py-2 font-semibold'
         onClick={()=>{
          setIndex(index+1)
         }}>
          next
          </button>
      </div>
    </div>
  )
}

export default App
