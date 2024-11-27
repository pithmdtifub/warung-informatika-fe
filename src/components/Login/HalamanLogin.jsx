import { Container, Row, Form, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { User } from 'lucide-react';
import { Eye } from 'lucide-react';
import './HalamanLogin.css'

function BagianLogin() {
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
            <Form>
                <Form.Group className="mb-3">
                    <div className="input-icon-wrapper">
                        <Form.Control className="input-usn-pw" type="username" placeholder="Username" required/>
                        <User className="icon-inside-input-halaman-login" />
                    </div>
                    <div className="input-icon-wrapper">
                        <Form.Control className="input-usn-pw" type="password" placeholder="Password" required/>
                        <Eye className="icon-inside-input-halaman-login" />
                    </div>
                    <Link to={'/dashboard-admin'}>
                        <Button type="submit" className="button-submit">Submit</Button>
                    </Link>
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