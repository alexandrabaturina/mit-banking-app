import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Bad Bank
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/createaccount">Create Account</Nav.Link>
                    <Nav.Link as={Link} to="/deposit">Deposit</Nav.Link>
                    <Nav.Link as={Link} to="/withdraw">Withdraw</Nav.Link>
                    <Nav.Link as={Link} to="/alldata">All Data</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar