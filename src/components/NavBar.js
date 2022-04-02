import {
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand style={{marginRight:"460px"}} as={Link} to="/">
          <b>Cookery</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              <h6>Home</h6>
            </Nav.Link>
            <Nav.Link as={Link} to="categories">
              <h6>Menu</h6>
            </Nav.Link>
            <Nav.Link as={Link} to="favourites">
              <h6>Favourites</h6>
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search using food name"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
