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
import { Snackbar, Alert } from "@mui/material";

import { create, read, remove, update } from "../../Services/provider";

const Provider = () => {
  const [loading, setLoading] = useState(false);

  const [nit, setNit] = useState("");
  const [telephone, setTelephone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    severity: "error",
    message: "",
  });

  const createRequest = async () => {
    setLoading(true);
    try {
      const data = {
        nit: nit,
        phone: telephone,
        name: name,
        address: address,
      };
      const result = await create(data);
      if (result.data) {
        setAlert({
          ...alert,
          severity: "success",
          message: "Se ha creado el proveedor",
          open: true,
        });
      } else {
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo crear el proveedor",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo crear el proveedor",
        open: true,
      });
    }
    setLoading(false);
  };

  const updateRequest = async () => {
    setLoading(true);

    try {
      const data = {
        nit: nit,
        phone: telephone,
        name: name,
        address: address,
      };
      const result = await update(nit, data);
      if (result.data) {
        setAlert({
          ...alert,
          severity: "success",
          message: "Se ha actualizado el proveedor",
          open: true,
        });
      } else {
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo actualizar el proveedor",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo actualizar el proveedor",
        open: true,
      });
    }
    setLoading(false);
  };

  const readRequest = async () => {
    setLoading(true);

    try {
      const result = await read(nit);
      if (result.data) {
        setNit(result.data.nit);
        setAddress(result.data.address);
        setName(result.data.name);
        setTelephone(result.data.phone);
      } else {
        setNit("");
        setAddress("");
        setName("");
        setTelephone("");
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo consultar el proveedor",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo leer el proveedor",
        open: true,
      });
    }
    setLoading(false);
  };

  const removeRequest = async () => {
    setLoading(true);

    try {
      const result = await remove(nit);
      if (result.data) {
        setNit("");
        setAddress("");
        setName("");
        setTelephone("");
        setAlert({
          ...alert,
          severity: "success",
          message: "Se ha eliminado el proveedor",
          open: true,
        });
      } else {
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo eliminar el proveedor",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo eliminar el proveedor",
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
            <Nav.Link href="/user">Usuarios</Nav.Link>
            <Nav.Link active href="/provider">
              Proveedores
            </Nav.Link>
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
          <Col xs="12" sm="6">
            <Form.Group className="mb-3 w-100">
              <Form.Label column sm="2">
                Nit
              </Form.Label>
              <Form.Control
                disabled={loading}
                type="text"
                onChange={(e) => {
                  setNit(e.target.value);
                }}
                value={nit}
              />
            </Form.Group>
          </Col>
          <Col xs="12" sm="6">
            <Form.Group className="mb-3 w-100">
              <Form.Label column sm="2">
                Teléfono
              </Form.Label>
              <Form.Control
                disabled={loading}
                type="text"
                onChange={(e) => {
                  setTelephone(e.target.value);
                }}
                value={telephone}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6">
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                disabled={loading}
                style={{ marginTop: 20 }}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </Form.Group>
          </Col>
          <Col xs="12" sm="6">
            <Form.Group className="mb-3 w-100">
              <Form.Label column sm="2">
                Dirección
              </Form.Label>
              <Form.Control
                disabled={loading}
                style={{ marginTop: 10 }}
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
              />
            </Form.Group>
          </Col>
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

export default Provider;
