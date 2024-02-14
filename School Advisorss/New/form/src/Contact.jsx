import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Contact = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Thank For Visting Us!');
  };

  return (
    <div style={{marginTop:"50px"}}>
    <Card body><pre style={{fontFamily:"monospace"}}><b>Address:The Avenue, Fourth Floor, Behind Prakash Petrol Pump, Govind Nagar, Nashik, Maharashtra 422009<br></br>
        Number: 8999726760<br></br>
        Email: prajapatiarvind883@gmail.com</b>
        </pre></Card>
    <div> <Link to="/payment"><Button style={{ display: 'block', margin: 'auto',marginTop:"20px" }} variant="primary" onClick={handleClick}>Back</Button></Link>
                                {message && <p style={{ textAlign: 'center' }}>{message}</p>}</div>
                                </div>
  );
}

export default Contact;


 