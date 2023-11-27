const express = require("express");
const path = require("path");
const morgan = require("morgan");
const usuarioController = require("./api/controller/usuarioController.js");
const servicioController = require("./api/controller/servicioController");
const citaController = require("./api/controller/citaController")

const app = express();
const PORT = 5000;

require('events').EventEmitter.defaultMaxListeners = 150;

app.use(morgan("dev"))
const srcPath = path.join(process.cwd(), 'proyecto2 avance 5 20-11-23/src');
app.use(express.static(srcPath));
// app.use(express.static(path.join(__dirname, "public")))
// app.use("/", router)

app.get('/', (req, res) => {
    res.sendFile(path.join(srcPath, 'features', 'login', 'login.html'));
});
app.get('/servicios', (req, res) => {
    res.sendFile(path.join(srcPath, 'features', 'servicios', 'servicios.html'));
});
app.get('/citas', (req, res) => {
    res.sendFile(path.join(srcPath, 'features', 'citas', 'citas.html'));
});
app.get('/getUser', usuarioController.getUser);
app.get('/getAllServices', servicioController.getAllServicios);
app.get('/getServicio', servicioController.getServicio);
app.get('/updateServicio', servicioController.updateServicio);
app.get('/deleteServicio', servicioController.deleteServicio);
app.get('/createServicio', servicioController.createServicio);
app.get('/getAllCitas', citaController.getAllCitas);
app.get('/getCita', citaController.getCita);
app.get('/updateCita', citaController.updateCita);
app.get('/deleteCita', citaController.deleteCita);
app.get('/createCita', citaController.createCita);

app.listen(PORT, () => {
    console.log("App listening on port 5000...")
    console.log("http://localhost:5000/")
});


