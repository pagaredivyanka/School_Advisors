import React from 'react'
import xyz from './premium.png';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


const Premium = () => {
  
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Thank You For Payment!');
    
    
  };
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"50px"}} >Scan And Pay</h1>
      <h2 style={{textAlign:"center",marginBottom:"20px"}}>You Are Paying For Professional Plan</h2>
       <img
        src={xyz}  // Replace with the path to your image
        alt="Qrcode"
        style={{ display: 'block', margin: 'auto' }}
      />
     <Button style={{ display: 'block', margin: 'auto',marginTop:"20px" }} variant="primary" onClick={handleClick} >Payment Done</Button>
                                {message && <p style={{ textAlign: 'center' }}>{message}</p>}
    </div>
  )
}

export default Premium;
