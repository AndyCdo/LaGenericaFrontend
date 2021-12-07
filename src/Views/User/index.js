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
  Spinner,
} from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { Snackbar, Alert } from "@mui/material";
import { create, read, remove, update } from "../../Services/user";

const User = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    severity: "error",
    message: "",
  });

  const createRequest = async () => {
    try {
      setLoading(true);

      const data = {
        identification: id,
        username: email,
        user: email,
        email: email,
        password: password,
      };
      const result = await create(data);
      if (result.data) {
        setAlert({
          ...alert,
          severity: "success",
          message: "Se ha creado el cliente",
          open: true,
        });
      } else {
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo crear el cliente",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo crear el cliente",
        open: true,
      });
    }
    setLoading(false);
  };

  const updateRequest = async () => {
    try {
      setLoading(true);
      const data = {
        identification: id,
        username: email,
        user: email,
        email: email,
        password: password,
      };
      const result = await update(id, data);
      if (result.data) {
        setAlert({
          ...alert,
          severity: "success",
          message: "Se ha actualizado el cliente",
          open: true,
        });
      } else {
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo actualizar el cliente",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo actualizar el cliente",
        open: true,
      });
    }
    setLoading(false);
  };

  const readRequest = async () => {
    try {
      setLoading(true);

      const result = await read(id);
      if (result.data) {
        setId(result.data.identification);
        setPassword(result.data.password);
        setEmail(result.data.email);
      } else {
        setId("");
        setEmail("");
        setPassword("");

        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo consultar el cliente",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo leer el cliente",
        open: true,
      });
    }
    setLoading(false);
  };

  const removeRequest = async () => {
    try {
      setLoading(true);

      const result = await remove(id);
      if (result.data) {
        setId("");
        setEmail("");
        setPassword("");
        setAlert({
          ...alert,
          severity: "success",
          message: "Se ha eliminado el cliente",
          open: true,
        });
      } else {
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo eliminar el cliente",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo eliminar el cliente",
        open: true,
      });
    }
    setLoading(false);
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
            <Nav.Link active href="/user">
              Usuarios
            </Nav.Link>
            <Nav.Link href="/provider">Proveedores</Nav.Link>
            <Nav.Link href="/sales">Ventas</Nav.Link>
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

      <Container
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: "70px",
          fontWeight: "bold",
        }}
      >
        <Row>
          <Col xs="12" sm="6">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Cédula</Form.Label>
              <Form.Control
                disabled={loading}
                type="text"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                value={id}
              />
            </Form.Group>
          </Col>
          <Col xs="12" sm="6">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                disabled={loading}
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                disabled={loading}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </Form.Group>
          </Col>
          <Col xs="12" sm="6"></Col>
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
              disabled={loading}
              variant="primary"
              size="lg"
              onClick={() => {
                readRequest();
              }}
            >
              Consultar
            </Button>
            <Button
              disabled={loading}
              variant="primary"
              size="lg"
              style={{ marginLeft: 20 }}
              onClick={() => {
                createRequest();
              }}
            >
              {loading ? <Spinner animation="border" role="status" /> : "Crear"}
            </Button>
            <Button
              disabled={loading}
              variant="primary"
              size="lg"
              style={{ marginLeft: 20 }}
              onClick={() => {
                updateRequest();
              }}
            >
              {loading ? (
                <Spinner animation="border" role="status" />
              ) : (
                "Actualizar"
              )}
            </Button>
            <Button
              disabled={loading}
              variant="danger"
              size="lg"
              style={{ marginLeft: 20 }}
              onClick={() => {
                removeRequest();
              }}
            >
              {loading ? (
                <Spinner animation="border" role="status" />
              ) : (
                "Borrar"
              )}
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

export default User;
