import React from 'react'
import './listContact.css';
import {RiDeleteBinLine} from 'react-icons/ri';
import profile from './defaultImg.jpg';
export default function ListContacts(props) {

  let listStyle={
    minHeight: "100vh",
  }
  return (
    
    <div className='container text-left' style={listStyle}>
      <h2>Contact List</h2>
      {(props.contactList.length===0)?<h3>No Contact Added</h3>:""}
        {props.contactList.map((contact)=>{
          return(<><div className='list d-flex  w-100 justify-content-between flex-wrap'> 
          <div className='d-flex'>
            <img src={profile} className="rounded-circle mr-2 my-2" alt="" width={50}/>
            <div className='mt-2'>
            <h3 className='my-0'>{contact.name}</h3>
            <h6 >{contact.email}</h6>
            </div>
            </div>
          <div className='icon align-self-center mr-3 mt-2 '>
          <button onClick={()=>{props.deleteContact(contact)}}>{<RiDeleteBinLine color='red' size={23}/>}</button>
          </div>
          </div>
          </>
          )
        })}
    </div>
  )
}
