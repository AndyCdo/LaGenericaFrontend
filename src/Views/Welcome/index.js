import React from "react";
import ImageBackground from "../../Assets/background.jpg";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  let navigate = useNavigate();
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
        <h1 style={{ textAlign: "center" }}>
          Bienvenidos a la Tienda por Departamentos <br />
          La Genérica
        </h1>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          display: "flex",
          width: "100%",
          marginTop: 30,
          height: 150,
        }}
      >
        <Button
          onClick={() => {
            navigate("/login/Bogotá");
          }}
          style={{ width: 300, fontWeight: "bold" }}
          variant="outline-primary"
        >
          BOGOTÁ
        </Button>
        <Button
          onClick={() => {
            navigate("/login/Medellín");
          }}
          style={{ width: 300, fontWeight: "bold" }}
          variant="outline-success"
        >
          MEDELLÍN
        </Button>
        <Button
          onClick={() => {
            navigate("/login/Cali");
          }}
          style={{ width: 300, fontWeight: "bold" }}
          variant="outline-warning"
        >
          CALI
        </Button>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          display: "flex",
          width: "100%",
          marginTop: "30px",
        }}
      >
        <h6 style={{ textAlign: "center" }}>
          Selecciona la Sucursal a la que deseas Ingresar
        </h6>
      </div>
    </>
  );
};

export default Welcome;
