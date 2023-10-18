const express = require("express")
const ventaController = require("../controller/ventaController")
const router = express.Router()

router.get("/ventas", ventaController.getAllCitas)
router.get("/venta", ventaController.getCita)
router.post("/venta/create", ventaController.createCita)
router.put("/venta/update", ventaController.updateCita)
router.delete("/venta/delete", ventaController.deleteCita)

module.exports = router;