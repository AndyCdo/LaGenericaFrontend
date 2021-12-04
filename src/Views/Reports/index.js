import React from "react";
import ImageBackground from "../../Assets/background.jpg";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
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
            <Nav.Link href="/reports">Reportes</Nav.Link>
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
        <Button
          onClick={() => {
            //navigate("/login/Bogotá");
          }}
          style={{ width: 300, fontWeight: "bold" }}
          variant="outline-primary"
        >
          Listado de clientes
        </Button>
        <Button
          onClick={() => {
            //navigate("/login/Medellín");
          }}
          style={{ width: 300, fontWeight: "bold" }}
          variant="outline-success"
        >
          Ventas por Cliente
        </Button>
      </div>
    </>
  );
};

export default Reports;
