import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
                        <Form.Control className="input-email-pw" type="username" placeholder="Username" required/>
                        <User className="icon-inside-input-halaman-login" />
                    </div>
                    <div className="input-icon-wrapper">
                        <Form.Control className="input-email-pw" type="password" placeholder="Password" required/>
                        <Eye className="icon-inside-input-halaman-login" />
                    </div>
                    <Button type="submit" className="button-submit">Submit</Button>
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