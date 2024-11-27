import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Form, Button, Card } from 'react-bootstrap';
import { User, EyeClosed, Eye } from 'lucide-react';
import './HalamanLogin.css'

function BagianLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard-admin")
    }
  });

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault(); 
      setErrorMessage(""); 
  
      try {
        const response = await fetch("https://9840-2407-0-3002-104e-598d-7e49-8393-eb00.ngrok-free.app/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }), 
        });
  
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
  
          navigate("/dashboard-admin");
        } else {
          const err = data.error || data.errors;
          if (typeof err == 'object') {
            for (const [key, value] of Object.entries(err)) {
              setErrorMessage(value);
            }
          } else {
            setErrorMessage(err); 
          }
        }
      } catch (error) {
      }
    };

    return (
    <>
    <p className='judul'>Warung Informatika</p>

    <div>
      <Container fluid className="background d-flex">
        <Row className="w-100 align-items-center">
            <Card className="card-login" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="login">Login</Card.Title>
                </Card.Body>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <div className="input-icon-wrapper">
                        <Form.Control className="input-usn-pw" type="username" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <User className="icon-inside-input-halaman-login user-icon" />
                    </div>
                    <div className="input-icon-wrapper">
                        <Form.Control className="input-usn-pw" type={showPassword ? "text" : "password"} placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {showPassword ? (<Eye className="icon-inside-input-halaman-login" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}/>
                        ) : (
                        <EyeClosed className="icon-inside-input-halaman-login" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}/>)}
                    </div>            
                        <Button type="submit" className="button-submit">Submit</Button>
                        {errorMessage && (<small className="text-error mt-2 d-block text-center">{errorMessage}</small>)}
                </Form.Group>
            </Form>
            </Card>
        </Row>
      </Container>
    </div>
    </>
    );
  }

  export default BagianLogin;