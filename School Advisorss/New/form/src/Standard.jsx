import React from 'react'
import xyz from './standard.png';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Standard= () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Thank You For Payment!');
  };
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"10px"}} >Scan And Pay</h1>
      <h2 style={{textAlign:"center",marginBottom:"10px"}}>Pay Within 2 Mins </h2>
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

export default Standard;
