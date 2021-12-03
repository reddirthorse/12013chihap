/*eslint-disable*/
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap';
import './CSS/App.css';

function Navibar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">

          &nbsp; 고속도로 여행 편의 시스템
        </Navbar.Brand>

      </Container>
    </Navbar>
  )
}

function DaeMoon() {
  return (
    <div className='daeMoon'>
      <Container>
        {/* <h1> All great ideas come from walking. </h1> */}
        {/* <p>
          F. Nietzsche
        </p> */}
      </Container>
    </div>

  )
}

function Footer() {
  return (

    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          </a>
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>
      </footer>
    </div>
  )
}

export { Navibar, DaeMoon, Footer }