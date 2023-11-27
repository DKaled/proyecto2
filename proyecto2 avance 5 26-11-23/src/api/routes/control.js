const express = require("express")
const controlController = require("../controller/controlController")
const router = express.Router()

router.get("/control/all", controlController.getAllCitas)
router.get("/control", controlController.getCita)
router.post("/control/create", controlController.createCita)
router.put("/control/update", controlController.updateCita)
router.delete("/control/delete", controlController.deleteCita)

module.exports = router;