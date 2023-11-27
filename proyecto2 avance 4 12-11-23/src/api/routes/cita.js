const express = require("express")
const citaController = require("../controller/citaController")
const router = express.Router()

router.get("/citas", citaController.getAllCitas)
router.get("/cita", citaController.getCita)
router.post("/cita/create", citaController.createCita)
router.put("/cita/update", citaController.updateCita)
router.delete("/cita/delete", citaController.deleteCita)

module.exports = router;
