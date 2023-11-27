const express = require("express")
const servicioController = require("../controller/servicioController")
const router = express.Router()

router.get("/servicios", servicioController.getAllCitas)
router.get("/servicio", servicioController.getCita)
router.post("/servicio/create", servicioController.createCita)
router.put("/servicio/update", servicioController.updateCita)
router.delete("/servicio/delete", servicioController.deleteCita)

module.exports = router;