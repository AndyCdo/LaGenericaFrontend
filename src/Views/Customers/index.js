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
import { create, read, remove, update } from "../../Services/customers";

const Customers = () => {
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
          <Form.Label column sm="2">
            Cédula
          </Form.Label>
          <Col sm="4">
            <Form.Control
              style={{ width: "300px", marginLeft: 10 }}
              type="text"
            />
          </Col>

          <Form.Label column sm="2">
            Teléfono
          </Form.Label>
          <Col sm="4">
            <Form.Control
              style={{ width: "300px", marginLeft: 10 }}
              type="text"
            />
          </Col>
        </Row>

        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Form.Label column sm="2">
            Nombre Completo
          </Form.Label>
          <Col sm="4">
            <Form.Control
              style={{ width: "300px", marginLeft: 10, marginTop: 20 }}
              type="text"
            />
          </Col>
          <Form.Label column sm="2">
            Correo Electrónico
          </Form.Label>
          <Col sm="4">
            <Form.Control
              style={{ width: "300px", marginLeft: 10, marginTop: 20 }}
              type="text"
            />
          </Col>
        </Row>

        <Row>
          <Form.Label column sm="2">
            Dirección
          </Form.Label>
          <Col sm="4">
            <Form.Control
              style={{ width: "300px", marginLeft: 10, marginTop: 10 }}
              type="text"
            />
          </Col>

          <Col sm="6" />
        </Row>

        <Row
          style={{
            marginTop: 50,
          }}
        >
          <div
            className="mb-2"
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            <Button variant="primary" size="lg">
              Consultar
            </Button>
            <Button variant="primary" size="lg" style={{ marginLeft: 20 }}>
              Crear
            </Button>
            <Button variant="primary" size="lg" style={{ marginLeft: 20 }}>
              Actualizar
            </Button>
            <Button variant="danger" size="lg" style={{ marginLeft: 20 }}>
              Borrar
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Customers;
