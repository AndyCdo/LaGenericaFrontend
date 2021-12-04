import React from "react";
import ImageBackground from "../../Assets/background.jpg";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";

const Sales = () => {
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
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/customers">Clientes</Nav.Link>
            <Nav.Link href="/reports">Reportes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: "70px",
          fontWeight: "bold",
        }}
      >
        <Row>
          <Form.Label column sm="1">
            Cédula
          </Form.Label>
          <Col sm="1">
            <Form.Control
              style={{ width: "300px", marginLeft: 10 }}
              type="text"
              placeholder="Normal text"
            />
          </Col>

          <Col sm="1">
            <Button
              style={{ width: "300px", marginLeft: 10 }}
              type="text"
              placeholder="Normal text"
            >
              Consultar
            </Button>
          </Col>

          <Form.Label column sm="1">
            Cliente
          </Form.Label>
          <Col sm="1">
            <Form.Control
              style={{ width: "300px", marginLeft: 10 }}
              type="text"
              placeholder="Normal text"
            />
          </Col>

          <Form.Label column sm="1">
            Consec.
          </Form.Label>
          <Col sm="1">
            <Form.Control
              style={{ width: "300px", marginLeft: 10 }}
              type="text"
              placeholder="Normal text"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sales;
