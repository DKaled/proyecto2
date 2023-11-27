const dbMethods = require("../../db/methods")
const {} = require("../../db/methods");
const controlController = {}

controlController.getAllControl = async (req, res) => {
    res.json(await dbMethods.getAllControl())
}

controlController.getControl = async (req, res) => {
    res.json(await dbMethods.getControl(req.query.id))
}

controlController.createControl = async (req, res) => {
    let resql = await dbMethods.createControl(req.query.usuario, req.query.servicio, req.query.venta, req.query.cita)
    res.json("ID: " + resql.insertId + " Affected Rows: " + resql.affectedRows)
}

controlController.updateControl = async (req, res) => {
    let resql = await dbMethods.updateControl(req.query.id, req.query.usuario, req.query.servicio, req.query.venta, req.query.cita)
    res.json(resql.info)
}

controlController.deleteControl = async (req, res) => {
    let resql = await dbMethods.deleteControl(req.query.id)
    res.json("Affected rows: " + resql.affectedRows)
}

module.exports = controlController;