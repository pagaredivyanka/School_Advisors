import React from 'react';
import { Button,Card } from 'react-bootstrap';

import { Link } from 'react-router-dom';




const Payment= () => {
  return (
    <>
     

    <div style={{marginTop:"100px"}} className="plan-cards-container">
      <Card className="plan-card">
        <Card.Header>Basic Plan</Card.Header>
        <Card.Body>
          <Card.Title>₹599/month</Card.Title>
          <Card.Text>
            Free Hosting.<br></br> Limited number of pages.<br></br> Basic Design
                and Layout.<br></br>100mb Storage Space.
          </Card.Text>
            <Link to="/registration"> <Button style={{marginTop:"50px"}} variant="primary">Choose Plan</Button></Link>
        </Card.Body>
      </Card>

      <Card className="plan-card">
        <Card.Header>Standard Plan</Card.Header>
        <Card.Body>
          <Card.Title>₹799/month</Card.Title>
          <Card.Text>
            Free Hosting.<br></br>More pages than Basic Package.<br></br>Enhanced
                Design and Layout .<br></br>500mb Storage Space.
          </Card.Text>
        <Link to="/standard">  <Button style={{marginTop:"50px"}} variant="primary">Choose Plan</Button></Link>
        </Card.Body>
      </Card>

      <Card className="plan-card">
        <Card.Header>Premium Plan</Card.Header>
        <Card.Body>
          <Card.Title>₹999/month</Card.Title>
          <Card.Text>
            Access to Basic and Standard Packages.<br></br>Advance
                Functionality. <br></br>Standard Customer Support.<br></br>Unlimited Storage Space.
          </Card.Text>
         <Link to="/premium"> <Button style={{marginTop:"25px"}} variant="primary">Choose Plan</Button></Link>
        </Card.Body>
      </Card>

      <Card className="plan-card">
        <Card.Header>Custom Plan</Card.Header>
        <Card.Body>
          <Card.Title>Custom Pricing</Card.Title>
          <Card.Text>
           We Will Customize your website According to Your Preferance.
          </Card.Text>
        <Link to="/contact"><Button style={{marginTop:"95px"}} variant="primary">Contact Us</Button></Link>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default Payment;

