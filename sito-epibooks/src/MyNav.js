import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>a
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#about">Browse</Nav.Link>
            <NavDropdown title="Categorie" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Fantas">Fantasy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#History">History </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Horror">Horror</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Romance">Romance</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Scifi">Scifi</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default MyNav;