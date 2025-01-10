import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Error = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Row>
                <Col>
                    <Card className="text-center" style={{ padding: '20px' }}>
                        <Card.Body>
                            <h1 className="display-4 text-danger">404</h1>
                            <h3>Oops! Page not found</h3>
                            <p>The page you are looking for does not exist or has been moved to a different location.</p>
                            <Button variant="primary" onClick={goHome}>Go Home</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Error;