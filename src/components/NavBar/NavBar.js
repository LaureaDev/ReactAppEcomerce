import './NavBar.css'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
  <CartWidget/>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll >
        <Link className='Category' to='/'>
            <Link to='/' className='Links'>Home</Link>
            <Link to='/category/MemoriaRam' className='Links' >Memoria RAM</Link>
            <Link to='/category/PlacaVideo' className='Links' >Placa de Video</Link>
            <Link to='/category/Procesador' className='Links' >Procesadores</Link>
            <Link to='/category/DiscoSSD' className='Links' >Discos</Link>
        </Link>
      </Nav>
      
      <Form className="d-flex">
      <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default NavBar