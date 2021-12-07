import React from "react";
import ImageBackground from "../../Assets/background.jpg";
import { Navbar, Container, Nav } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Products = () => {
  return (
    <>
      <img
        style={{
          position: "absolute",
          zIndex: "-1",
          width: "100%",
          height: "100%",
          top: 0,
        }}
        width="100%"
        height="100%"
        alt="La Generica"
        src={ImageBackground}
      />

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/welcome">
            <HomeIcon />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/user">Usuarios</Nav.Link>
            <Nav.Link href="/provider">Proveedores</Nav.Link>
            <Nav.Link href="/sales">Ventas</Nav.Link>
            <Nav.Link active href="/products">
              Productos
            </Nav.Link>
            <Nav.Link href="/customers">Clientes</Nav.Link>
            <Nav.Link href="/reports">Reportes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          padding: "0 50px",
          marginTop: "100px",
        }}
      >
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" />
        </Form.Group>

        <Button
          onClick={() => {}}
          style={{ width: 100, marginTop: "20px" }}
          variant="primary"
          type="submit"
        >
          Cargar
        </Button>
      </div>
    </>
  );
};

export default Products;
