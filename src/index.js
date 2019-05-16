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
app.get("/profesores", (req, res) => {
  let profesores = [
    { ID: 0, Cedula: 123, nombre: "Diego", apellido: "Galeano"  },
    { ID: 1, Cedula: 133, nombre: "Olier", apellido: "Torres" },
    { ID: 2, Cedula: 134, nombre: "Ali", apellido: "Lopez" },
    { ID: 3, Cedula: 135, nombre: "Alexander", apellido: "Bravo" },
    { ID: 4, Cedula: 136, nombre: "Fram", apellido: "Ballestero" },
  ];
  res.send(profesores);
});
app.get("/temas", (req, res) => {
  let temas = [
    { ID: 0, nombre: "proposiciones logicas", descripcion: "concepto"  },
    { ID: 1, nombre: "tipos de proposiciones", descripcion: "identificar los tipos de proposiciones" },

  ];
  res.send(temas);
});
app.get("/contenidos", (req, res) => {
  let contenidos = [
    { ID: 0, nombre: "Que es una proposiciones logicas", descripcion: "reconocer sus valores de verdad"  },
    { ID: 1, nombre: "Cuales son los tipos de proposiciones", descripcion: "proposiciones simples y compuestas" },

  ];
  res.send(contenidos);
});
app.get("/actividades", (req, res) => {
  let actividades = [
    { ID: 0, nombre: "Actividad 1", descripcion: "desarrollar", nivel:1 },
    { ID: 1, nombre: "Actividad 2", descripcion: "indentificar", nivel: 2 },

  ];
  res.send(actividades);
});
app.get("/evaluaciones", (req, res) => {
  let evaluaciones = [
    { ID: 0, ponderado: 5, descripcion: "actividad 1", nivel:1 },
    { ID: 1, ponderado: 1, descripcion: "actividad 2", nivel: 2 },

  ];
  res.send(evaluaciones);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
