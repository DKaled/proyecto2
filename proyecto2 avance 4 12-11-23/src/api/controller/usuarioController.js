const dbMethods = require("../../db/methods")
const {} = require("../../db/methods");
const usuarioController = {}

usuarioController.getAllUsers = async (req, res) => {
    res.json(await dbMethods.getAllUsers())
}

usuarioController.getUser = async (req, res) => {
    res.json(await dbMethods.getUser(req.query.correo, req.query.contrasenna))
}

usuarioController.createUser = async (req, res) => {
    let resql = await dbMethods.createUser(req.query.nombre, req.query.correo, req.query.contrasenna)
    res.json("ID: " + resql.insertId + " Affected Rows: " + resql.affectedRows)
}

usuarioController.updateUser = async (req, res) => {
    let resql = await dbMethods.updateUser(req.query.id, req.query.nombre, req.query.correo, req.query.contrasenna)
    res.json(resql.info)
}

usuarioController.deleteUser = async (req, res) => {
    let resql = await dbMethods.deleteUser(req.query.id)
    res.json("Affected rows: " + resql.affectedRows)
}

module.exports = usuarioController;