import React, { useState } from "react";
import ImageBackground from "../../Assets/background.jpg";
import { useNavigate } from "react-router-dom";
import { Form, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { auth } from "../../Services/user";
import { Snackbar, Alert } from "@mui/material";

const Login = () => {
  let navigate = useNavigate();
  let { sede } = useParams();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    severity: "error",
    message: "",
  });

  const loginRequest = async () => {
    try {
      setLoading(true);
      const result = await auth(username, password);
      if (result.data.identification) {
        navigate("/products");
      } else {
        setAlert({
          ...alert,
          severity: "error",
          message: "No se pudo autenticar el usuario",
          open: true,
        });
      }
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo autenticar el usuario",
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
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          display: "flex",
          width: "100%",
          marginTop: "70px",
        }}
      >
        <h1
          style={{ textAlign: "center" }}
        >{`Bienvenidos a la Sucursal ${sede}`}</h1>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          display: "flex",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <h5 style={{ textAlign: "center" }}>Ingresa Tus Datos</h5>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <Form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <Form.Group className="mb-3 w-100">
            <Form.Label style={{ fontWeight: "bold" }}>Usuario</Form.Label>
            <Form.Control
              disabled={loading}
              placeholder="Enter email"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3 w-100">
            <Form.Label style={{ fontWeight: "bold" }}>Contraseña</Form.Label>
            <Form.Control
              disabled={loading}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button
            disabled={loading}
            onClick={() => {
              loginRequest();
            }}
            variant="primary"
          >
            {loading ? (
              <Spinner animation="border" role="status" />
            ) : (
              "Iniciar Sesión"
            )}
          </Button>
        </Form>
      </div>
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

export default Login;
