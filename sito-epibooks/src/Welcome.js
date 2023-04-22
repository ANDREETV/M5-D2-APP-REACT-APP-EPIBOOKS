import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Welcome() {
    return (
        <Container>
            <Row className='mt-5'>
                <Col>
                    <h1>EpiBooks</h1>
                    <Button className='btn-books' variant="success">Books</Button>{' '}
                </Col >
                <Col className='d-flex flex-column justify-content-end align-items-center'>
                    <h2>Vendiamo libri di tutte le categorie</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Welcome

