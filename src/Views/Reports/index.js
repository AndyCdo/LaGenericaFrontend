import React from "react";
import ImageBackground from "../../Assets/background.jpg";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";

const Reports = () => {
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
            <Nav.Link active href="/reports">
              Reportes
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          width: "50%",
          marginTop: 30,
          height: 150,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Container>
          <Row>
            <Col sm="6" xs="12">
              <Button
                className="mb-3 w-100"
                onClick={() => {}}
                style={{ fontWeight: "bold" }}
                variant="outline-primary"
              >
                Listado de clientes
              </Button>
            </Col>
            <Col sm="6" xs="12">
              <Button
                className="mb-3 w-100"
                onClick={() => {}}
                style={{ fontWeight: "bold" }}
                variant="outline-success"
              >
                Ventas por Cliente
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Reports;
