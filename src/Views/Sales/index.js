import React, { useState, useEffect } from "react";
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
import { read } from "../../Services/customers";
import { read as readProduct } from "../../Services/products";
import {
  create as createSale,
  getLast as lastSale,
} from "../../Services/sales";

const Sales = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    severity: "error",
    message: "",
  });
  const [last, setLast] = useState(null);
  const [id, setId] = useState("");
  const [customer, setCostumer] = useState("");
  const [consecutive, setconsecutive] = useState("");
  const [productOne, setProductOne] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [product2, setProduct2] = useState("");
  const [nameProduct2, setNameProduct2] = useState("");
  const [amount2, setAmount2] = useState("");
  const [total2, setTotal2] = useState("");
  const [product3, setProduct3] = useState("");
  const [nameProduct3, setNameProduct3] = useState("");
  const [amount3, setAmount3] = useState("");
  const [total3, setTotal3] = useState("");
  const [totalSale, setTotalSale] = useState("");
  const [totalIva, setTotalIva] = useState("");
  const [sales, setSales] = useState("");
  const [productPriceOne, setProductPriceOne] = useState("");
  const [productPriceTwo, setProductPriceTwo] = useState("");
  const [productPriceThree, setProductPriceThree] = useState("");
  const [iva, setIva] = useState("");
  const [iva2, setIva2] = useState("");
  const [iva3, setIva3] = useState("");

  useEffect(() => {
    const getLast = async () => {
      if (last === null) {
        const result = await lastSale();
        setLast(result.ok);
        if (result.ok) {
          setconsecutive(parseInt(result?.data?.code || 0) + 1);
        }
      }
    };
    getLast();
  }, [last]);

  const saveSale = async () => {
    try {
      setLoading(true);
      const data = {
        code: consecutive,
        identification: id,
        details: [
          {
            amount: parseInt(amount),
            code: productOne,
            total: total,
            value: total * iva + total,
            iva: total * iva,
          },
          {
            amount: parseInt(amount2),
            code: product2,
            total: total2,
            value: total2 * iva2 + total2,
            iva: total2 * iva2,
          },
          {
            amount: parseInt(amount3),
            code: product3,
            total: total3,
            value: total3 * iva3 + total3,
            iva: total3 * iva3,
          },
        ],
        total: sales,
        value: totalSale,
      };
      const result = await createSale(data);
      if (result.ok) {
        setAlert({
          ...alert,
          severity: "success",
          message: "Su compra se ha creado exitosamente",
          open: true,
        });
      } else {
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo confirmar la compra",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo confirmar la compra",
        open: true,
      });
    }
    setLoading(false);
  };

  const getCostumer = async () => {
    try {
      setLoading(true);
      if (id && id !== "") {
        const result = await read(id);
        if (result.ok) {
          setCostumer(result.data.name);
        } else {
          setAlert({
            ...alert,
            severity: "error",
            message: "No se pudo consultar el cliente",
            open: true,
          });
        }
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

  const getProduct = async (index) => {
    try {
      setLoading(true);
      let productCode = "";
      if (index === 1) {
        productCode = productOne;
      } else if (index === 2) {
        productCode = product2;
      } else if (index === 3) {
        productCode = product3;
      }
      if (productCode && productCode !== "") {
        const result = await readProduct(productCode);
        if (result.ok) {
          if (index === 1) {
            setNameProduct(result.data.name);
            setProductPriceOne(result.data.salePrice);
            setIva(result.data.iva);
          } else if (index === 2) {
            setNameProduct2(result.data.name);
            setProductPriceTwo(result.data.salePrice);
            setIva2(result.data.iva);
          } else if (index === 3) {
            setNameProduct3(result.data.name);
            setProductPriceThree(result.data.salePrice);
            setIva3(result.data.iva);
          }
        } else {
          setAlert({
            ...alert,
            severity: "error",
            message: "No se pudo consultar el Producto",
            open: true,
          });
        }
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo leer el Producto",
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
            <Nav.Link href="/provider">Proveedores</Nav.Link>
            <Nav.Link active href="/sales">
              Ventas
            </Nav.Link>
            <Nav.Link href="/products">Productos</Nav.Link>
            <Nav.Link href="/customers">Clientes</Nav.Link>
            <Nav.Link href="/reports">Reportes</Nav.Link>
            <Nav.Link href="/consolidated">Consolidación</Nav.Link>
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
              <Form.Control
                type="text"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                value={id}
              />
            </Form.Group>
          </Col>
          <Col sm="2">
            <Button
              className="w-100"
              style={{ marginTop: 30 }}
              type="text"
              onClick={() => {
                getCostumer();
              }}
            >
              Consultar
            </Button>
          </Col>
          <Col sm="4">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Cliente</Form.Label>
              <Form.Control
                disabled
                type="text"
                onChange={(e) => {
                  setCostumer(e.target.value);
                }}
                value={customer}
              />
            </Form.Group>
          </Col>
          <Col sm="3">
            <Form.Group className="mb-3 w-100">
              <Form.Label>Consecutivo</Form.Label>
              <Form.Control
                disabled
                type="text"
                onChange={(e) => {
                  setconsecutive(e.target.value);
                }}
                value={consecutive}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ marginTop: 50 }}>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Cod. Producto</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setProductOne(e.target.value);
                }}
                value={productOne}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button
              className="w-100"
              style={{ marginTop: 30 }}
              type="text"
              onClick={() => {
                getProduct(1);
              }}
            >
              Consultar
            </Button>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Nombre Producto</Form.Label>
              <Form.Control
                disabled
                type="text"
                onChange={(e) => {
                  setNameProduct(e.target.value);
                }}
                value={nameProduct}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  const currentTotal = e.target.value * productPriceOne;
                  setAmount(e.target.value);
                  setTotal(currentTotal);
                  const saleTotal = currentTotal + total2 + total3;
                  setTotalSale(saleTotal);

                  const priceTotalIva1 = currentTotal * iva;
                  const priceTotalIva2 = total2 * iva2;
                  const priceTotalIva3 = total3 * iva3;
                  const totalIva =
                    priceTotalIva1 + priceTotalIva2 + priceTotalIva3;
                  setTotalIva(totalIva);

                  const sumaIva = parseInt(saleTotal) + parseInt(totalIva);
                  setSales(sumaIva);
                }}
                value={amount}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Label>Valor Total</Form.Label>
              <Form.Control
                disabled
                type="text"
                onChange={(e) => {
                  setTotal(e.target.value);
                }}
                value={total}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control
                type="text"
                onChange={(e) => {
                  setProduct2(e.target.value);
                }}
                value={product2}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button
              className="w-100"
              type="text"
              onClick={() => {
                getProduct(2);
              }}
            >
              Consultar
            </Button>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control
                disabled
                type="text"
                onChange={(e) => {
                  setNameProduct2(e.target.value);
                }}
                value={nameProduct2}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control
                type="text"
                onChange={(e) => {
                  const currentTotal = e.target.value * productPriceTwo;
                  setAmount2(e.target.value);
                  setTotal2(currentTotal);
                  const saleTotal = currentTotal + total + total3;
                  setTotalSale(saleTotal);

                  const priceTotalIva1 = total * iva;
                  const priceTotalIva2 = currentTotal * iva2;
                  const priceTotalIva3 = total3 * iva3;
                  const totalIva =
                    priceTotalIva1 + priceTotalIva2 + priceTotalIva3;
                  setTotalIva(totalIva);

                  const sumaIva = parseInt(saleTotal) + parseInt(totalIva);
                  setSales(sumaIva);
                }}
                value={amount2}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control
                disabled
                type="text"
                onChange={(e) => {
                  setTotal2(e.target.value);
                }}
                value={total2}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control
                type="text"
                onChange={(e) => {
                  setProduct3(e.target.value);
                }}
                value={product3}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button
              className="w-100"
              type="text"
              onClick={() => {
                getProduct(3);
              }}
            >
              Consultar
            </Button>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control
                disabled
                type="text"
                onChange={(e) => {
                  setNameProduct3(e.target.value);
                }}
                value={nameProduct3}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control
                type="text"
                onChange={(e) => {
                  const currentTotal = e.target.value * productPriceThree;
                  setAmount3(e.target.value);
                  setTotal3(currentTotal);
                  const saleTotal = currentTotal + total + total2;
                  setTotalSale(saleTotal);

                  const priceTotalIva1 = total * iva;
                  const priceTotalIva2 = total2 * iva2;
                  const priceTotalIva3 = currentTotal * iva3;
                  const totalIva =
                    priceTotalIva1 + priceTotalIva2 + priceTotalIva3;
                  setTotalIva(totalIva);

                  const sumaIva = parseInt(saleTotal) + parseInt(totalIva);
                  setSales(sumaIva);
                }}
                value={amount3}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 w-100">
              <Form.Control
                disabled
                type="text"
                onChange={(e) => {
                  setTotal3(e.target.value);
                }}
                value={total3}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" />
          <Col xs="2">
            <Form.Label>Total Venta</Form.Label>
          </Col>
          <Col xs="2">
            <Form.Control
              disabled
              className="mb-3 w-100"
              type="text"
              onChange={(e) => {
                setTotalSale(e.target.value);
              }}
              value={totalSale}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" />
          <Col xs="2">
            <Form.Label>Total IVA</Form.Label>
          </Col>
          <Col xs="2">
            <Form.Control
              disabled
              className="mb-3 w-100"
              type="text"
              onChange={(e) => {
                setTotalIva(e.target.value);
              }}
              value={totalIva}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="8" />
          <Col xs="2">
            <Form.Label>Total con IVA</Form.Label>
          </Col>
          <Col xs="2">
            <Form.Control
              disabled
              className="mb-3 w-100"
              type="text"
              onChange={(e) => {
                setSales(e.target.value);
              }}
              value={sales}
            />
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
              onClick={() => {
                saveSale();
              }}
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
