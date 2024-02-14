import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Container, Form, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Registration() {
  const [validated, setValidated, isValid] = useState(false);
  const [message, setMessage] = useState("");

  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [stype, setstype] = useState("");
  const [sname, setsname] = useState("");
  const [add, setadd] = useState("");
  const [plan, setplan] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const mydata = {
      name: name,
      contact: contact,
      stype: stype,
      sname: sname,
      add: add,
      plan: plan,
    };

    axios
      .post("http://localhost:8000/registration", mydata)
      .then((res) => {
        console.log(res.data);
        setMessage("Click On Next");
      })
      .catch((err) => {
        console.log(err);
      });

    setValidated(true);
  };

  const handleClick = () => {
    setMessage("Thank You For Payment!");
  };
  return (
    <>
      <Container className="registration-form-container mt-5">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your name"
              onChange={(e) => setname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Enter your contact number"
              onChange={(e) => setcontact(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="validationCustom05">
            <Form.Label>School Type</Form.Label>
            {["radio"].map((type, index) => (
              <div key={`inline-${type}-${index}`} className="mb-3">
                <Form.Check
                  inline
                  label="SSC"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  onChange={() => setstype("SSC")}
                  checked={stype === "SSC"}
                />
                <Form.Check
                  inline
                  label="CBSC"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  onChange={() => setstype("CBSC")}
                  checked={stype === "CBSC"}
                />
                <Form.Check
                  inline
                  label="ICSE"
                  name="group1"
                  type={type}
                  id={`inline-${type}-3`}
                  onChange={() => setstype("ICSE")}
                  checked={stype === "ICSE"}
                />
              </div>
            ))}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSchoolName">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter the school name"
              onChange={(e) => setsname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSchoolAddress">
            <Form.Label>School Address</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Enter the school address"
              onChange={(e) => setadd(e.target.value)}
            />
          </Form.Group>

          <>
            <Container>
              <Form.Label>Choose Plan</Form.Label>
              <Row>
                <Col xs={12} md={6} lg={3}>
                  <Card className="plan-card">
                    <Card.Header>Basic Plan</Card.Header>
                    <Card.Body>
                      <Form.Check
                        type="radio"
                        name="planSelection"
                        id="radio-basic-plan"
                        label=""
                        inline
                        onChange={() => setplan("basic")}
                        checked={plan === "basic"}
                      />
                      <Card.Title>₹599/month</Card.Title>
                      <Card.Text style={{ marginBottom: "26px" }}>
                        Free Hosting.<br></br> Limited number of pages.<br></br>{" "}
                        Basic Design and Layout.<br></br>100mb Storage Space.
                        <br />
                        <br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card className="plan-card">
                    <Card.Header>Standard Plan</Card.Header>
                    <Card.Body>
                      <Form.Check
                        type="radio"
                        name="planSelection"
                        id="radio-standard-plan"
                        label=""
                        inline
                        onChange={() => setplan("standard")}
                        checked={plan === "standard"}
                      />
                      <Card.Title>₹799/month</Card.Title>
                      <Card.Text style={{ marginBottom: "26px" }}>
                        Free Hosting.<br></br>More pages than Basic Package.
                        <br></br>Enhanced Design and Layout .<br></br>500mb
                        Storage Space.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card className="plan-card">
                    <Card.Header>Premium Plan</Card.Header>
                    <Card.Body>
                      <Form.Check
                        type="radio"
                        name="planSelection"
                        id="radio-premium-plan"
                        label=""
                        inline
                        onChange={() => setplan("premium")}
                        checked={plan === "premium"}
                      />
                      <Card.Title>₹999/month</Card.Title>
                      <Card.Text>
                        Access to Basic and Standard Packages.<br></br>Advance
                        Functionality. <br></br>Standard Customer Support.
                        <br></br>Unlimited Storage Space.<br/><br/>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} md={6} lg={3}>
                  <Card className="plan-card">
                    <Card.Header>Custom Plan</Card.Header>
                    <Card.Body>
                      <Form.Check
                        color="red"
                        type="radio"
                        name="planSelection"
                        id="radio-custom-plan"
                        label=""
                        inline
                        onChange={() => setplan("custom")}
                        checked={plan === "custom"}
                      />
                      <Card.Title>Custom Pricing</Card.Title>
                      <Card.Text style={{ marginBottom: "68px" }}>
                        We Will Customize your website According to Your
                        Preferance.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* ... other components ... */}
            </Container>
          </>

          {!isValid && (
            <p style={{ color: "red" }}>
              Please fill out all required fields before proceeding.
            </p>
          )}
          {message && <p>{message}</p>}
          <Button
            variant="primary" onClick={handleClick} type="submit">
            Submit
          </Button>&nbsp;&nbsp;

          <Link to="/standard"><Button variant="primary">Next</Button></Link>
        </Form>
      </Container>
    </>
  );
}

export default Registration;