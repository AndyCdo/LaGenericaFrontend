import React, { useState } from "react";
import ImageBackground from "../../Assets/background.jpg";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { auth } from "../../Services/user";
import { Snackbar } from "@mui/material";

const Login = () => {
  let navigate = useNavigate();
  let { sede } = useParams();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    severity: "error",
    message: "",
  });

  const loginRequest = async () => {
    try {
      // await auth(username, password);
      navigate("/home");
    } catch {
      setAlert({
        ...alert,
        severity: "error",
        message: "No se pudo autenticar el usuario",
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

      <Form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          marginTop: "50px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "bold", width: 500 }}>
            Usuario
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold", width: 500 }}>
            Contraseña
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          onClick={() => {
            loginRequest();
          }}
          variant="primary"
          type="submit"
        >
          Iniciar Sesión
        </Button>
      </Form>

      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={() => {
          setAlert({ ...alert, open: false, message: "" });
        }}
        message={alert.message}
        severity={alert.severity}
      ></Snackbar>
    </>
  );
};

export default Login;
