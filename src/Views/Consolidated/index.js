import React from "react";
import ImageBackground from "../../Assets/background.jpg";
import { Navbar, Container, Nav, Row, Table, Col } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

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
            <Nav.Link active href="/consolidated">
              Consolidación
            </Nav.Link>
            <Navbar.Brand href="/welcome" style={{ marginLeft: 20 }}>
              <LogoutIcon />
            </Navbar.Brand>
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
        <Container style={{ marginTop: 100 }}>
          <Row>
            <div
              style={{
                textAlign: "center",
                width: "100%",
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              Total de Ventas por Ciudad
            </div>
          </Row>

          <Row>
            <Table
              striped
              bordered
              hover
              style={{
                marginTop: 20,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <thead>
                <tr>
                  <th>CIUDAD</th>
                  <th>VALOR TOTAL VENTAS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Row>

          <Row>
            <Col sm={4}></Col>
            <Col style={{ textAlign: "right", fontWeight: "bold" }} sm={4}>
              Total Ventas Tienda $
            </Col>
            <Col sm={4}>
              <div
                style={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  width: "100%",
                  borderRadius: 5,
                  textAlign: "right",
                  padding: "0 10px",
                  fontWeight: "bold",
                }}
              >
                55000
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Reports;
