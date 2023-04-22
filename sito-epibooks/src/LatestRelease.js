import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import Horror from './CategoriaFilm/horror.json';





function LatestRelease() {
    return (
        <Container fluid className='mt-5 pt-5'>
        <Row className='d-flex flex-row justify-content-center gap-2'>
        {
            Horror.map((elem, i) => (
                <Col md={8} lg={4} xl={3} sm={12} key={i}>
                <Card  className='shadow h-100'>
                    <Card.Img variant="top" src={elem.img}  className=' mb-3' height={450}/>
                    <Card.Body className='mb-4 h-75'>
                    <Card.Title className='p-2 text-center' >{elem.title}</Card.Title>
                    <Card.Text className='px-3'> Categoria : <br/>
                        {elem.category}
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>{elem.asin}</ListGroup.Item>
                    <ListGroup.Item>€ {elem.price}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className='' >
                    <Card><Button variant="warning">Acquista</Button>{' '}</Card>
                    <Card><Button variant="secondary">Visualizza prodotto</Button>{' '}</Card>
                    </Card.Body>
                </Card>
                </Col>
            ))
        } 
            
        </Row>
        </Container>

    );
}




export default LatestRelease