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
          width: "80%",
          marginTop: "70px",
          fontWeight: "bold",
        }}
      >
        <Row>
          <Form.Label style={{ marginLeft: 10 }} column sm="1">
            Cédula
          </Form.Label>
          <Col sm="2">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>

          <Col sm="2">
            <Button style={{ width: "100px", marginLeft: 20 }} type="text">
              Consultar
            </Button>
          </Col>

          <Form.Label style={{ marginLeft: 10 }} column sm="1">
            Cliente
          </Form.Label>
          <Col sm="2">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>

          <Form.Label style={{ marginLeft: 20 }} column sm="1">
            Consec.
          </Form.Label>
          <Col sm="2">
            <Form.Control style={{ width: "100px" }} type="text" />
          </Col>
        </Row>

        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            width: "90%",
            marginTop: "40px",
          }}
        >
          <Form.Label column sm="2" style={{ marginTop: 30 }}>
            Cod. Producto
          </Form.Label>

          <Form.Label column sm="2" style={{ marginTop: 30 }} />

          <Form.Label column sm="3" style={{ marginTop: 30 }}>
            Nombre Producto
          </Form.Label>

          <Form.Label column sm="3" style={{ marginTop: 30 }}>
            Cant.
          </Form.Label>

          <Form.Label column sm="2" style={{ marginTop: 30 }}>
            Vlr. Total
          </Form.Label>

          <Col sm="2">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>

          <Col sm="2">
            <Button style={{ width: "100px", marginLeft: 40 }} type="text">
              Consultar
            </Button>
          </Col>

          <Col sm="3">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>
          <Col sm="3">
            <Form.Control
              style={{ width: "200px", marginTop: 10 }}
              type="text"
            />
          </Col>
          <Col sm="2">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>

          <Col sm="2">
            <Form.Control
              style={{ width: "200px", marginTop: 10 }}
              type="text"
            />
          </Col>

          <Col sm="2">
            <Button
              style={{ width: "100px", marginLeft: 40, marginTop: 10 }}
              type="text"
            >
              Consultar
            </Button>
          </Col>

          <Col sm="3">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>
          <Col sm="3">
            <Form.Control
              style={{ width: "200px", marginTop: 10 }}
              type="text"
            />
          </Col>
          <Col sm="2">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>

          <Col sm="2">
            <Form.Control
              style={{ width: "200px", marginTop: 10 }}
              type="text"
            />
          </Col>

          <Col sm="2">
            <Button
              style={{ width: "100px", marginLeft: 40, marginTop: 10 }}
              type="text"
            >
              Consultar
            </Button>
          </Col>

          <Col sm="3">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>
          <Col sm="3">
            <Form.Control
              style={{ width: "200px", marginTop: 10 }}
              type="text"
            />
          </Col>
          <Col sm="2">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>
        </Row>

        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            width: "83%",
            marginTop: "30px",
          }}
        >
          <Col sm="8" />
          <Form.Label style={{ width: "200px", marginLeft: 20 }} column sm="2">
            Total Venta
          </Form.Label>
          <Col sm="1">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>
        </Row>

        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            width: "83%",
            marginTop: "10px",
          }}
        >
          <Col sm="8" />
          <Form.Label style={{ width: "200px", marginLeft: 20 }} column sm="2">
            Total IVA
          </Form.Label>
          <Col sm="1">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>
        </Row>

        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            width: "83%",
            marginTop: "10px",
          }}
        >
          <Col sm="8" />
          <Form.Label style={{ width: "200px", marginLeft: 20 }} column sm="2">
            Total con IVA
          </Form.Label>
          <Col sm="1">
            <Form.Control style={{ width: "200px" }} type="text" />
          </Col>
        </Row>

        <Row
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            display: "flex",
            width: "83%",
            marginTop: "10px",
          }}
        >
          <Col sm="2">
            <Button
              style={{ width: "200px", marginLeft: 40, marginTop: 10 }}
              type="text"
            >
              Confirmar
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sales;
