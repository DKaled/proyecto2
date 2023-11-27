const dbMethods = require("../../db/methods")
const {} = require("../../db/methods");
const citaController = {}

citaController.getAllCitas = async (req, res) => {
    res.json(await dbMethods.getAllCitas())
}

citaController.getCita = async (req, res) => {
    res.json(await dbMethods.getCita(req.query.fecha))
}

citaController.createCita = async (req, res) => {
    let resql = await dbMethods.createCita(req.query.inicio, req.query.fin, req.query.fecha)
    res.json("ID: " + resql.insertId + " Affected Rows: " + resql.affectedRows)
}

citaController.updateCita = async (req, res) => {
    let resql = await dbMethods.updateCita(req.query.id, req.query.inicio, req.query.fin, req.query.fecha)
    res.json(resql.info)
}

citaController.deleteCita = async (req, res) => {
    let resql = await dbMethods.deleteCita(req.query.id)
    res.json("Affected rows: " + resql.affectedRows)
}

module.exports = citaController;