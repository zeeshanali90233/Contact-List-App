import React from 'react'
import { useState } from 'react'
export default function AddContactForm(props) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        // if(!name){alert("Name can't be empty")}
        props.addContactFunc(name,email);

        setName("");
        setEmail("");

    }

    let requiredStarStyle={
        color:"red",
    }
  return (
    <div className="container text-left mt-3" onSubmit={submit} >
        <form >
            <h3>Add Contact </h3>
  <div className="form-group">
    <label htmlFor="name">Name <span className='requiredStar' style={requiredStarStyle}>*</span></label>
    <input type="text" className="form-control" value={name} id="name" onChange={(e)=>{setName(e.target.value)}} required aria-describedby="emailHelp" placeholder="Enter name"></input>
  </div>
  <div className="form-group">
    <label htmlFor="email">Password <span className='requiredStar' style={requiredStarStyle}>*</span></label>
    <input type="email" className="form-control" value={email} id="email" onChange={(e)=>{setEmail(e.target.value)}} required placeholder="Enter email"></input>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
    </div>
  )
}
