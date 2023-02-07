import React from 'react';
import { Navbar, Container, Nav,  Form, FormControl, Button } from 'react-bootstrap';




const Appbar = () => {
    const user=false;
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand href="#">NetFlix Mini</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        
                    </Nav>
                    {
                        user?
                        <button className='btn btn-warning ' >Logout</button>
                        :<button className='btn btn-danger ' >Login</button>
                    }
                    
                    
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Appbar;



