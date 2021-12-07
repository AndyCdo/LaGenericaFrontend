import React, { useState } from "react";
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
import LogoutIcon from "@mui/icons-material/Logout";
import { Snackbar, Alert } from "@mui/material";

const Sales = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    severity: "error",
    message: "",
  });

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
            <Nav.Link active href="/sales">
              Ventas
            </Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/customers">Clientes</Nav.Link>
            <Nav.Link href="/reports">Reportes</Nav.Link>
            <Nav.Link href="/reports">Consolidación</Nav.Link>
            <Navbar.Brand href="/welcome" style={{ marginLeft: 20 }}>
              <LogoutIcon />
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>

      <Container style={{ padding: 20, marginTop: "70px", fontWeight: "bold" }}>
        <Row>
          <Col sm="3">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Cédula</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col sm="2">
            <Button className="w-100" style={{ marginTop: 30 }} type="text">
              Consultar
            </Button>
          </Col>
          <Col sm="4">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Cliente</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col sm="3">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Consecutivo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Cod. Producto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Button className="w-100" style={{ marginTop: 30 }} type="text">
              Consultar
            </Button>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Valor Total</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Button className="w-100" type="text">
              Consultar
            </Button>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Button className="w-100" type="text">
              Consultar
            </Button>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" />
          <Col xs="2">
            <Form.Label>Total Venta</Form.Label>
          </Col>
          <Col xs="2">
            <Form.Control className="mb-3 w-100" type="text" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" />
          <Col xs="2">
            <Form.Label>Total IVA</Form.Label>
          </Col>
          <Col xs="2">
            <Form.Control className="mb-3 w-100" type="text" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" />
          <Col xs="2">
            <Form.Label>Total con IVA</Form.Label>
          </Col>
          <Col xs="2">
            <Form.Control className="mb-3 w-100" type="text" />
          </Col>
        </Row>
        <Row>
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
            <Button
              style={{ width: "200px", marginLeft: 40, marginTop: 10 }}
              type="text"
            >
              Confirmar
            </Button>
          </div>
        </Row>
      </Container>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={() => {
          setAlert({ ...alert, open: false, message: "" });
        }}
      >
        <Alert
          onClose={() => {
            setAlert({ ...alert, open: false, message: "" });
          }}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Sales;
