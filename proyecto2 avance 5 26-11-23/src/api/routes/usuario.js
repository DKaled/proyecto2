import express from "express";
import usuarioController from "../controller/usuarioController";
const router = express.Router()

router.get("/usuarios", usuarioController.getAllUsers)
router.get("/usuario", usuarioController.getUser)
router.post("/usuario/create", usuarioController.createUser)
router.put("/usuario/update", usuarioController.updateUser)
router.delete("/usuario/delete", usuarioController.deleteUser)

module.exports = router;
