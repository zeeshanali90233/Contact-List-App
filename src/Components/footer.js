import React from 'react'
import './footer.css';
export default function Footer() {
    let currYear=new Date().getFullYear();
  return (
    <div className='footer bg-light p-2 w-100 '>
        <h4>CopyRight&copy; {currYear} </h4>
    </div>
  )
}
