import React, { useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Form,
  Nav,
  Button,
  FormControl,
} from "react-bootstrap";

export const TheNavbar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchHandler = (e) => {
    e.preventDefault();
    filterBySearch(searchValue);
    setSearchValue("");
  };

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">KASIM RESTAURANT</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search.."
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button variant="outline-success" onClick={onSearchHandler}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};
