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
import { create, read, remove, update } from "../../Services/customers";

const Customers = () => {
  const [id, setId] = useState("");
  const [telephone, setTelephone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    severity: "error",
    message: "",
  });

  const createRequest = async () => {
    try {
      const data = {
        identification: id,
        phone: telephone,
        name: name,
        email: email,
        address: address,
      };
      const result = await create(data);
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo crear el usuario",
        open: true,
      });
    }
  };

  const updateRequest = async () => {
    try {
      const data = {
        identification: id,
        phone: telephone,
        name: name,
        email: email,
        address: address,
      };
      const result = await update(id, data);
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo actualizar el usuario",
        open: true,
      });
    }
  };

  const readRequest = async () => {
    try {
      const result = await read(id);
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo leer el usuario",
        open: true,
      });
    }
  };

  const removeRequest = async () => {
    try {
      const result = await remove(id);
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo eliminar el usuario",
        open: true,
      });
    }
  };

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
              onChange={(e) => {
                setId(e.target.value);
              }}
              value={id}
            />
          </Col>

          <Form.Label column sm="2">
            Teléfono
          </Form.Label>
          <Col sm="4">
            <Form.Control
              style={{ width: "300px", marginLeft: 10 }}
              type="text"
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              value={telephone}
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
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </Col>
          <Form.Label column sm="2">
            Correo Electrónico
          </Form.Label>
          <Col sm="4">
            <Form.Control
              style={{ width: "300px", marginLeft: 10, marginTop: 20 }}
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
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
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
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
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                readRequest();
              }}
            >
              Consultar
            </Button>
            <Button
              variant="primary"
              size="lg"
              style={{ marginLeft: 20 }}
              onClick={() => {
                createRequest();
              }}
            >
              Crear
            </Button>
            <Button
              variant="primary"
              size="lg"
              style={{ marginLeft: 20 }}
              onClick={() => {
                updateRequest();
              }}
            >
              Actualizar
            </Button>
            <Button
              variant="danger"
              size="lg"
              style={{ marginLeft: 20 }}
              onClick={() => {
                removeRequest();
              }}
            >
              Borrar
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Customers;
