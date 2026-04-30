import React from 'react'

const card = (props) => {
  console.log(props);
  return (
    
      <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1774271481336-845c3a07f690?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{props.user},{props.age}</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ipsa.</p>
      <button>View Profile</button>
    </div>
   
  )
}

export default card
