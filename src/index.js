const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Monteria");
});

app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", lastName: "Doe", age: 30 },
    { name: "María", lastName: "Sharápova", age: 32 }
  ];
  res.send(users);
});
app.get("/alumnos", (req, res) => {
  let alumnos = [
    { ID: 0, nombre: "Juan", apellido: "Martinez"  },
    { ID: 1, nombre: "María", apellido: "Vargas" },
    { ID: 2, nombre: "Pedro", apellido: "Gomez" },
    { ID: 3, nombre: "Jesus", apellido: "Argumedo" },
    { ID: 4, nombre: "Daniela", apellido: "Petro" },
  ];
  res.send(alumnos);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
